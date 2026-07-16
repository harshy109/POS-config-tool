-- ==========================================
-- POS Configuration Tool Schema
-- ==========================================

DROP TABLE IF EXISTS audit_logs CASCADE;
DROP TABLE IF EXISTS node_configurations CASCADE;
DROP TABLE IF EXISTS configuration_keys CASCADE;
DROP TABLE IF EXISTS hierarchy CASCADE;

-- ==========================================
-- Hierarchy
-- Every node can have configurations
-- ==========================================

CREATE TABLE hierarchy (
    id SERIAL PRIMARY KEY,
    parent_id INT REFERENCES hierarchy(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(30) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- Configuration Keys
-- ==========================================

CREATE TABLE configuration_keys (
    id SERIAL PRIMARY KEY,
    key_name VARCHAR(100) UNIQUE NOT NULL,
    display_name VARCHAR(100) NOT NULL,
    data_type VARCHAR(30) NOT NULL,
    default_value TEXT
);

-- ==========================================
-- Node Configurations
-- Can belong to ANY hierarchy node
-- ==========================================

CREATE TABLE node_configurations (
    id SERIAL PRIMARY KEY,
    node_id INT NOT NULL REFERENCES hierarchy(id) ON DELETE CASCADE,
    configuration_key_id INT NOT NULL REFERENCES configuration_keys(id),
    value TEXT NOT NULL,
    is_override BOOLEAN DEFAULT FALSE,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    UNIQUE(node_id, configuration_key_id)
);

-- ==========================================
-- Audit Logs
-- ==========================================

CREATE TABLE audit_logs (
    id SERIAL PRIMARY KEY,
    configuration_id INT REFERENCES node_configurations(id),
    old_value TEXT,
    new_value TEXT,
    updated_by VARCHAR(100),
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
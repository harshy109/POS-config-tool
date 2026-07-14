CREATE TABLE hierarchy (
    id SERIAL PRIMARY KEY,

    parent_id INTEGER REFERENCES hierarchy(id),

    name VARCHAR(100) NOT NULL,

    type VARCHAR(30) NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE stores (

    id SERIAL PRIMARY KEY,

    hierarchy_id INTEGER
        REFERENCES hierarchy(id),

    store_code VARCHAR(20) UNIQUE NOT NULL,

    store_name VARCHAR(100) NOT NULL,

    status VARCHAR(20)
        DEFAULT 'ACTIVE',

    created_at TIMESTAMP
        DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE configuration_keys (

    id SERIAL PRIMARY KEY,

    key_name VARCHAR(100)
        UNIQUE NOT NULL,

    display_name VARCHAR(100),

    data_type VARCHAR(30),

    default_value TEXT
);

CREATE TABLE store_configurations (

    id SERIAL PRIMARY KEY,

    store_id INTEGER
        REFERENCES stores(id),

    configuration_key_id INTEGER
        REFERENCES configuration_keys(id),

    value TEXT,

    is_override BOOLEAN
        DEFAULT FALSE,

    updated_at TIMESTAMP
        DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE audit_logs (
    id SERIAL PRIMARY KEY,
    configuration_id INTEGER NOT NULL REFERENCES store_configurations(id),
    old_value TEXT,
    new_value TEXT,
    updated_by VARCHAR(100),
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
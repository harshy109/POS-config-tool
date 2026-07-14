-- ==========================================
-- Hierarchy
-- ==========================================

INSERT INTO hierarchy (id, parent_id, name, type) VALUES
(1, NULL, 'Global', 'global'),
(2, 1, 'North America', 'region'),
(3, 2, 'USA', 'country'),
(4, 3, 'Texas', 'state'),
(5, 4, 'Houston District', 'district');

INSERT INTO stores
(id, hierarchy_id, store_code, store_name, status)
VALUES
(1, 5, '1024', 'Store #1024', 'ACTIVE'),
(2, 5, '1025', 'Store #1025', 'ACTIVE'),
(3, 5, '1026', 'Store #1026', 'ACTIVE');

INSERT INTO configuration_keys
(id, key_name, display_name, data_type, default_value)
VALUES
(1, 'timezone', 'Timezone', 'string', 'CST'),
(2, 'currency', 'Currency', 'string', 'USD'),
(3, 'language', 'Language', 'string', 'English'),
(4, 'posVersion', 'POS Version', 'string', 'Verifone VX820'),
(5, 'receiptFooter', 'Receipt Footer', 'string', 'Thank you for shopping!'),
(6, 'taxRegion', 'Tax Region', 'string', 'Texas');

INSERT INTO store_configurations
(store_id, configuration_key_id, value, is_override)
VALUES
(1,1,'CST',false),
(1,2,'USD',false),
(1,3,'English',false),
(1,4,'Verifone VX820',false),
(1,5,'Thank you for shopping!',false),
(1,6,'Texas',false),

(2,1,'EST',true),
(2,2,'USD',false),
(2,3,'English',false),
(2,4,'Ingenico DX8000',true),
(2,5,'Visit Again!',true),
(2,6,'Texas',false),

(3,1,'PST',true),
(3,2,'USD',false),
(3,3,'Spanish',true),
(3,4,'Verifone VX820',false),
(3,5,'Gracias!',true),
(3,6,'California',true);


INSERT INTO audit_logs
(configuration_id, old_value, new_value, updated_by)
VALUES
(7,'CST','EST','admin'),
(10,'Verifone VX820','Ingenico DX8000','admin'),
(17,'English','Spanish','regional_manager');
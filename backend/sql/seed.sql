-- ==========================================
-- Hierarchy
-- ==========================================

INSERT INTO hierarchy (id, parent_id, name, type) VALUES
(1,NULL,'Global','global'),
(2,1,'North America','region'),
(3,2,'USA','country'),
(4,3,'Texas','state'),
(5,4,'Houston District','district'),

(6,5,'Store #1024','store'),
(7,5,'Store #1025','store'),
(8,5,'Store #1026','store');

INSERT INTO configuration_keys
(id,key_name,display_name,data_type,default_value)
VALUES
(1,'timezone','Timezone','string','UTC'),
(2,'currency','Currency','string','USD'),
(3,'language','Language','string','English'),
(4,'posVersion','POS Version','string','Verifone VX820'),
(5,'receiptFooter','Receipt Footer','string','Thank You');

-- Global
INSERT INTO node_configurations
(node_id,configuration_key_id,value)
VALUES
(1,2,'USD'),
(1,3,'English');

-- USA
INSERT INTO node_configurations
(node_id,configuration_key_id,value)
VALUES
(3,1,'EST');

-- Texas
INSERT INTO node_configurations
(node_id,configuration_key_id,value)
VALUES
(4,1,'CST');

-- Store1025 Override
INSERT INTO node_configurations
(node_id,configuration_key_id,value,is_override)
VALUES
(7,4,'Ingenico DX8000',true);

-- Store1026 Override
INSERT INTO node_configurations
(node_id,configuration_key_id,value,is_override)
VALUES
(8,3,'Spanish',true);


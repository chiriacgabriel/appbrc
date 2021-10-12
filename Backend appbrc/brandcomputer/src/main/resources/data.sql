INSERT INTO roles(id, enum_role, name_of_role) VALUES (1, "ROLE_ADMIN", "Admin");
INSERT INTO roles(id, enum_role, name_of_role) VALUES (2, "ROLE_USER", "User");
INSERT INTO roles(id, enum_role, name_of_role) VALUES (3, "ROLE_GUEST", "Guest");
INSERT INTO roles(id, enum_role, name_of_role) VALUES (4, "ROLE_ACCOUNTANT", "Accountant");
INSERT INTO roles(id, enum_role, name_of_role) VALUES (5, "ROLE_WEBSITE", "WebAdmin");

ALTER TABLE `appbrc`.`nir_component`
    CHANGE COLUMN `video_card_id` `video_card_id` INT NULL DEFAULT NULL ,
    CHANGE COLUMN `storage_id` `storage_id` INT NULL DEFAULT NULL ,
    CHANGE COLUMN `sound_card_id` `sound_card_id` INT NULL DEFAULT NULL ,
    CHANGE COLUMN `processor_id` `processor_id` INT NULL DEFAULT NULL ,
    CHANGE COLUMN `power_source_id` `power_source_id` INT NULL DEFAULT NULL ,
    CHANGE COLUMN `optical_unit_id` `optical_unit_id` INT NULL DEFAULT NULL ,
    CHANGE COLUMN `motherboard_id` `motherboard_id` INT NULL DEFAULT NULL ,
    CHANGE COLUMN `memory_ram_id` `memory_ram_id` INT NULL DEFAULT NULL ,
    CHANGE COLUMN `fan_case_id` `fan_case_id` INT NULL DEFAULT NULL ,
    CHANGE COLUMN `cpu_cooler_id` `cpu_cooler_id` INT NULL DEFAULT NULL ,
    CHANGE COLUMN `computer_id` `computer_id` INT NULL DEFAULT NULL ,
    CHANGE COLUMN `case_id` `case_id` INT NULL DEFAULT NULL ;

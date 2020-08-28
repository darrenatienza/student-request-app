/*ALTER TABLE `students` CHANGE `course_id` `course_id` INT
(6) UNSIGNED NOT NULL;

ALTER TABLE `students`
ADD CONSTRAINT `fk_courses_course_id` FOREIGN KEY
(`course_id`) REFERENCES `courses`
(`course_id`) ON
DELETE RESTRICT ON
UPDATE RESTRICT;

ALTER TABLE `students`
ADD `first_name` VARCHAR
(250) NULL;
ALTER TABLE `students`
ADD `middle_name` VARCHAR
(250) NULL;
ALTER TABLE `students`
ADD `last_name` VARCHAR
(250) NULL;*/
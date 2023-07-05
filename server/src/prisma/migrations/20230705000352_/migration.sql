-- CreateTable
CREATE TABLE `menu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `path` VARCHAR(191) NOT NULL,
    `classname` VARCHAR(191) NOT NULL,
    `pathroute` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `logs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `method` VARCHAR(191) NOT NULL,
    `message` VARCHAR(191) NULL,
    `located` VARCHAR(191) NOT NULL,
    `time` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `errors` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `errorId` INTEGER NOT NULL,
    `method` VARCHAR(191) NOT NULL,
    `message` VARCHAR(191) NULL,
    `located` VARCHAR(191) NOT NULL,
    `time` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE "menu" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "classname" TEXT NOT NULL,
    "pathroute" TEXT NOT NULL,

    CONSTRAINT "menu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "logs" (
    "id" SERIAL NOT NULL,
    "method" TEXT NOT NULL,
    "message" TEXT,
    "located" TEXT NOT NULL,
    "time" TEXT NOT NULL,

    CONSTRAINT "logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "errors" (
    "id" SERIAL NOT NULL,
    "errorId" INTEGER NOT NULL,
    "method" TEXT NOT NULL,
    "message" TEXT,
    "located" TEXT NOT NULL,
    "time" TEXT NOT NULL,

    CONSTRAINT "errors_pkey" PRIMARY KEY ("id")
);

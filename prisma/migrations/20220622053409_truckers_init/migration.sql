-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bookmarks" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "link" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "bookmarks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "entreprise" (
    "id_entreprise" SERIAL NOT NULL,
    "nom_entreprise" TEXT NOT NULL,
    "utilisateur_id" TEXT NOT NULL,

    CONSTRAINT "entreprise_pkey" PRIMARY KEY ("id_entreprise")
);

-- CreateTable
CREATE TABLE "chronomode" (
    "id_chronomode" SERIAL NOT NULL,
    "nom_chronomode" TEXT NOT NULL,
    "date_chronomode" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "utilisateur_id" TEXT NOT NULL,

    CONSTRAINT "chronomode_pkey" PRIMARY KEY ("id_chronomode")
);

-- CreateTable
CREATE TABLE "infractions" (
    "id_infractions" SERIAL NOT NULL,
    "nom_infractions" TEXT NOT NULL,
    "date_infractions" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "utilisateur_id" TEXT NOT NULL,

    CONSTRAINT "infractions_pkey" PRIMARY KEY ("id_infractions")
);

-- CreateTable
CREATE TABLE "journee" (
    "id_journee" SERIAL NOT NULL,
    "conduite_journee" INTEGER NOT NULL,
    "service_journee" INTEGER NOT NULL,
    "repos_journee" INTEGER NOT NULL,
    "debut_journee" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fin" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "utilisateur_id" TEXT NOT NULL,

    CONSTRAINT "journee_pkey" PRIMARY KEY ("id_journee")
);

-- CreateTable
CREATE TABLE "semaine" (
    "id_semaine" SERIAL NOT NULL,
    "conduite_semaine" INTEGER NOT NULL,
    "service_semaine" INTEGER NOT NULL,
    "repos_semaine" INTEGER NOT NULL,
    "debut_semaine" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "utilisateur_id" TEXT NOT NULL,

    CONSTRAINT "semaine_pkey" PRIMARY KEY ("id_semaine")
);

-- CreateTable
CREATE TABLE "bi_semaine" (
    "id_bi_semaine" SERIAL NOT NULL,
    "conduite_bi_semaine" INTEGER NOT NULL,
    "service_bi_semaine" INTEGER NOT NULL,
    "repos_bi_semaine" INTEGER NOT NULL,
    "debut_bi_semaine" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "utilisateur_id" TEXT NOT NULL,

    CONSTRAINT "bi_semaine_pkey" PRIMARY KEY ("id_bi_semaine")
);

-- CreateTable
CREATE TABLE "tri_semaine" (
    "id_tri_semaine" SERIAL NOT NULL,
    "repos_a_rattraper" INTEGER NOT NULL,
    "utilisateur_id" TEXT NOT NULL,

    CONSTRAINT "tri_semaine_pkey" PRIMARY KEY ("id_tri_semaine")
);

-- CreateTable
CREATE TABLE "mois" (
    "id_mois" SERIAL NOT NULL,
    "conduite_mois" INTEGER NOT NULL,
    "service_mois" INTEGER NOT NULL,
    "repos_mois" INTEGER NOT NULL,
    "debut_mois" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "infractions_mois" TEXT NOT NULL,
    "decouches_mois" INTEGER NOT NULL,
    "utilisateur_id" TEXT NOT NULL,

    CONSTRAINT "mois_pkey" PRIMARY KEY ("id_mois")
);

-- CreateTable
CREATE TABLE "annee" (
    "id_annee" SERIAL NOT NULL,
    "conduite_annee" INTEGER NOT NULL,
    "service_annee" INTEGER NOT NULL,
    "debut_annee" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "utilisateur_id" TEXT NOT NULL,

    CONSTRAINT "annee_pkey" PRIMARY KEY ("id_annee")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "bookmarks" ADD CONSTRAINT "bookmarks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

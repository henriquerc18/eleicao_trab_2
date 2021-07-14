CREATE DATABASE politica
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Portuguese_Brazil.1252'
    LC_CTYPE = 'Portuguese_Brazil.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;



CREATE TABLE candidato (
    id serial,
    nome VARCHAR(50),
    partido varchar(20),
    numero INTEGER
)


CREATE TABLE public.projeto
(
)

TABLESPACE pg_default;

ALTER TABLE public.projeto
    OWNER to postgres;
mysql -u root

create database jornal;

use jornal;

create table jornalBanco(
    -> id int primary key auto_increment,
    -> cpf_assinante varchar(15),
    -> nome_assinante varchar(30),
    -> email_assinante varchar(30)
    -> );
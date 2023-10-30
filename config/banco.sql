mysql -u root

create database bancoJornal;

use jornal;

create table assinante(
    -> id int primary key auto_increment,
    -> cpf_assinante varchar(15),
    -> nome_assinante varchar(30),
    -> email_assinante varchar(30)
    -> );

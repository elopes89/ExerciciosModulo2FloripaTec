package com.projeto2.modulo3.model.dto;

import lombok.Data;

import java.util.Date;
@Data
public class NotificacaoDto {

    private Long id;

    private String titulo;

    private String subTitulo;

    private String data;

    private Boolean lido;
}

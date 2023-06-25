package com.projeto2.modulo3.input;

import lombok.Data;

import java.util.Date;

@Data
public class NotificacaoInput {

    private String titulo;
    private String subTitulo;
    private Date data;

    //private List<ProdutoInput> produtos = new ArrayList<ProdutoInput>();
}

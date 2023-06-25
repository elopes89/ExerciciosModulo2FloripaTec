package com.projeto2.modulo3.input;

import lombok.Data;

@Data
public class NotificacaoEditLido {


    private Long id;

    private String titulo;

    private String subTitulo;

    private String data;

    private boolean lido;

    public boolean getLido() {
        return true;
    }
}

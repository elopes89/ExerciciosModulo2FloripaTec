package com.projeto2.modulo3.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Data
@Entity
@Table(name = "notificacao")
public class Notificacao implements Serializable {
    @EqualsAndHashCode.Include

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Preencha")
    @NotNull(message = " O valor não pode ser nulo!")
    @Column(unique = true)
    private String titulo;

    private String subTitulo;

    private String data;

    private Boolean lido;
    }


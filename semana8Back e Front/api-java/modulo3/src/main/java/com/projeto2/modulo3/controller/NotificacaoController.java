package com.projeto2.modulo3.controller;
import java.time.format.DateTimeFormatter;
import java.time.LocalDateTime;

import com.projeto2.modulo3.input.NotificacaoEditLido;
import com.projeto2.modulo3.model.dto.NotificacaoDto;
import com.projeto2.modulo3.input.NotificacaoInput;
import com.projeto2.modulo3.model.Notificacao;
import com.projeto2.modulo3.service.NotificacaoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*")
@Api(tags = "Notificacoes")
@RequestMapping(value = "/not")
@RestController
public class NotificacaoController {

    @Autowired
    NotificacaoService notificacaoService;
    @ApiOperation("LISTAR")
    @GetMapping
    @ResponseBody
    public ResponseEntity<List<NotificacaoDto>> listar() {
        List<Notificacao> notificacoes = notificacaoService.listar();
        return new ResponseEntity<List<NotificacaoDto>>(toCollection(notificacoes),HttpStatus.OK);
    }


    @ApiOperation("CADASTRAR")
    @PostMapping
    public ResponseEntity<NotificacaoDto> cadastrar( @RequestBody NotificacaoInput notificacaoInput) {
        Notificacao not = notificacaoService.salvar(toDomain(notificacaoInput));
        return new ResponseEntity<NotificacaoDto>(toDto(not), HttpStatus.CREATED);
    }

    @ApiOperation("MudarEstado")
    @PutMapping("up/{id}")
    @ResponseBody
    public ResponseEntity<Notificacao> Editarestado(@PathVariable Long id, @RequestBody  Notificacao teste ) {
      Notificacao not = notificacaoService.getNotificacaoById(id);
      not.setTitulo(teste.getTitulo());
      not.setSubTitulo(teste.getSubTitulo());
      not.setData(dtf.format(now));
      not.setLido(teste.getLido());
       Notificacao  upd = notificacaoService.salvar(not);
        return new ResponseEntity<Notificacao>(upd, HttpStatus.OK);
    }

    @ApiOperation("remover")
        @DeleteMapping("/{id}")
@ResponseBody
        public ResponseEntity<List<NotificacaoDto>> deletar(@PathVariable Long id) {
    notificacaoService.delete(id);
    List<Notificacao> notificacoes = notificacaoService.listar();
    return new ResponseEntity<List<NotificacaoDto>>(toCollection(notificacoes), HttpStatus.NO_CONTENT );
}


    DateTimeFormatter dtf = DateTimeFormatter.ofPattern("HH:mm");
    LocalDateTime now = LocalDateTime.now();

    private NotificacaoDto toDto(Notificacao notificacao) {

        NotificacaoDto dto = new NotificacaoDto();
        dto.setId(notificacao.getId());
        dto.setTitulo(notificacao.getTitulo());
        dto.setSubTitulo(notificacao.getSubTitulo());
        dto.setData(dtf.format(now));
        dto.setLido(notificacao.getLido());

        return dto;
    }

    private Notificacao toDomainLido(NotificacaoEditLido input) {
        Notificacao cat = new Notificacao();
        cat.setId(input.getId());
        cat.setTitulo(input.getTitulo());
        cat.setSubTitulo(input.getSubTitulo());
        cat.setData(dtf.format(now));
        cat.setLido(input.getLido());
        return cat;
    }


    private Notificacao toDomain(NotificacaoInput input) {
        Notificacao cat = new Notificacao();

        cat.setTitulo(input.getTitulo());
        cat.setSubTitulo(input.getSubTitulo());
        cat.setData(dtf.format(now));
        cat.setLido(false);
        return cat;
    }

    private List<NotificacaoDto> toCollection(List<Notificacao> categorias) {
        return categorias.stream().map(Notificacao -> toDto(Notificacao))
                .collect(Collectors.toList());
    }

}
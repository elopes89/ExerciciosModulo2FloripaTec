package com.projeto2.modulo3.service;


import com.projeto2.modulo3.model.Notificacao;
import com.projeto2.modulo3.repository.NotificacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class NotificacaoService {

    @Autowired
    NotificacaoRepository notificacaoRepository;
    @Transactional
    public Notificacao salvar(Notificacao notificacao) {
        return notificacaoRepository.save(notificacao);
    }

    @Transactional
    public void delete(Long idNotificacao) {
        notificacaoRepository.deleteById(idNotificacao);
    }

    @Transactional
    public Notificacao getNotificacaoById(Long id){ return notificacaoRepository.findById(id).get(); }

    @Transactional
    public List<Notificacao> listar(){
        List<Notificacao> notificacao = notificacaoRepository.findAll();
        return notificacao;
    }


  /*  public Usuario getUserById(Long idUsuario){
        return repository.findById(idUsuario).get();
    }

    public List<Usuario> getUsuarios(){
        List<Usuario> usuarios = repository.findAll();
        return usuarios;
    }

    public List<Usuario> getUserByName(String nome){
        return repository.getUserByName(nome);
    }
*/



}

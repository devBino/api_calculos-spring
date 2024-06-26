package br.com.api.calculos.vo;

import java.io.Serializable;

/**
 * VO para encapsular propriedades da entidade ApiInfo
 */
public class ApiInfoVO implements Serializable {
    
    public static final Long serialVersionUID = 1L;

    private String autor;
    private String repositorio;
    private String versao;

    public ApiInfoVO(){
        autor = "Fernando Bino Machado";
        repositorio = "https://github.com/devBino";
        versao = "1";
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public String getRepositorio() {
        return repositorio;
    }

    public void setRepositorio(String repositorio) {
        this.repositorio = repositorio;
    }

    public String getVersao() {
        return versao;
    }

    public void setVersao(String versao) {
        this.versao = versao;
    }

}

package br.com.calculadora.controller.v1;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.calculadora.bo.v1.CalculoBO;
import br.com.calculadora.service.v1.CalculoServiceV1;

@RestController
@RequestMapping("/calculos/v1")
public class CalculoControllerV1 {
    
    @Autowired
    private CalculoServiceV1 service;

    @PostMapping(
        value = "/criar", 
        consumes = MediaType.APPLICATION_JSON_VALUE,
        produces = MediaType.APPLICATION_JSON_VALUE)
    public CalculoBO criar(@RequestBody CalculoBO pBody){
        return service.criar(pBody);
    }

    @GetMapping(value = "/listar", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<CalculoBO> listar(){
        return service.listarCalculos();
    }

    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public CalculoBO getById(@PathVariable(value = "id") String pId){
        return service.getById(Integer.valueOf(pId));
    }

    @PutMapping(
        value = "/atualizar",
        consumes = MediaType.APPLICATION_JSON_VALUE,
        produces = MediaType.APPLICATION_JSON_VALUE
    )
    public CalculoBO atualizar(@RequestBody CalculoBO pBody){
        return service.atualizar(pBody);
    }

    @DeleteMapping(value = "/deletar/{id}")
    public ResponseEntity<?> delete(@PathVariable(value = "id") String pId){
        service.deletar(Integer.valueOf(pId));
        return ResponseEntity.noContent().build();
    }

}

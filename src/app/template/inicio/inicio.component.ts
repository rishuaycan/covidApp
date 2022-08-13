import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CentroSalud } from 'src/app/interfaces/centros.interface';
import { Paciente } from 'src/app/interfaces/paciente.interface';
import { TemplateService } from '../template.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  vacunados: Paciente[] = [];
  formInicio: FormGroup = this.fb.group({
    cod_unico: ['Seleccione',[Validators.required] ]
  })
  centrosDeSalud: CentroSalud []= [
    {cod_unico: '0000',establecimiento: 'Seleccione Centro de Salud'},
    {cod_unico: '5931',establecimiento: 'AMAUTA'},
    {cod_unico: '5884',establecimiento: 'HORACIO ZEVALLOS'},
    {cod_unico: '5926',establecimiento: 'EL EXITO'},
    {cod_unico: '5928',establecimiento: 'MANYLSA'},
    {cod_unico: '7149',establecimiento: 'LA FRATERNIDAD'},
    {cod_unico: '5885',establecimiento: 'SEÑOR DE LOS MILAGROS'},
    {cod_unico: '13186',establecimiento: 'FRATERNIDAD NIÑO JESUS ZONA X'},
    {cod_unico: '5927',establecimiento: 'SANTA CLARA'},
    {cod_unico: '5932',establecimiento: 'SAN ANTONIO'},
  ]



  constructor(private fb: FormBuilder,
              private templateService: TemplateService) { }


  ngOnInit(): void {
    this.formInicio.get('cod_unico')?.setValue('5926');

    const centroDefault =  this.formInicio.value;
    this.templateService.getPaciente(centroDefault)
      .subscribe(({vacunados}:any) => {
       this.vacunados = vacunados;
        console.log(this.vacunados);
      })
  }

}

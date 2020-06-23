import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../environments/environment';
import { VeiculoModel } from '../model/veiculo.model';
import { ViagemConfirmarDTO } from '../model/viagem-confirmar.dto';
import { ViagemDisponibilidadeDTO } from '../model/viagem-disponibildade.dto';
import { ViagemService } from '../service/viagem.service';
import { interval } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitar-viagem',
  templateUrl: './solicitar-viagem.component.html',
  styleUrls: ['./solicitar-viagem.component.scss']
})
export class SolicitarViagemComponent implements AfterViewInit {

  public map: mapboxgl.Map;
  public style = 'mapbox://styles/mapbox/streets-v11';
  public lat = -23.573997;
  public lng = -46.623013;

  public destino = 'busque pela caixa de texto e use os ponteiros do teclado para escolher e enter para definir';
  public veiculo: VeiculoModel;
  public temDestino = false;
  public temCarro = false;
  public isLinear = true;

  public progressbarValue = 0;
  public progressbarValue2 = 0;
  public contagemRegressiva = 10;

  public veiculos: VeiculoModel[];

  @ViewChild("inputLocal") inputLocal: HTMLCollection;
  @ViewChild('stepper') private stepper: MatStepper;

  constructor(private serviceViagem: ViagemService, private router: Router) { }

  ngAfterViewInit() {

    this.inputLocal = document.getElementsByClassName("mapboxgl-ctrl-geocoder--input");

    mapboxgl.accessToken = environment.mapbox;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 16,
      center: [this.lng, this.lat]
    });

    this.map.addControl(new mapboxgl.NavigationControl());

    this.map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      })
    );

    this.map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
      })
    );

    this.map.on('keypress', function (e) {
      console.log(JSON.stringify(e.point));
    });

    this.inputLocal.item(0).addEventListener('keydown', ($event: KeyboardEvent) => {
      if ($event.which == 13) {
        this.destino = (<HTMLTextAreaElement>$event.target).value;
        this.temDestino = true;
      } else {
        this.destino = 'busque pela caixa de texto e use os ponteiros do teclado para escolher e enter para definir';
        this.temDestino = false;
      }
    }, false);
  }

  public selecionarVeiculo(veiculo: VeiculoModel) {
    this.veiculo = veiculo;
  }

  public solicitarCarro() {
    if (this.temDestino) {
      let viagem: ViagemDisponibilidadeDTO = {
        adress: this.destino
      }

      this.serviceViagem.consultarDisponibilidade(viagem).subscribe(result => {
        this.stepper.next();
        this.veiculos = result as VeiculoModel[];

        if (this.veiculos.length) {
          this.temCarro = true;
        }

      });
    }
  }

  public confirmarCarro() {

    let viagem: ViagemConfirmarDTO = {
      adress: this.destino,
      idUser: 1,
      idVehicle: this.veiculo.id
    }

    this.serviceViagem.confirmarViagem(viagem).subscribe(result => {

      if (result) {
        this.stepper.next();
        this.progressbar();
      }

    });

  }

  public progressbar() {

    const timer$ = interval(1000);
    const sub = timer$.subscribe((sec) => {
      this.progressbarValue = this.progressbarValue + 10;
      this.contagemRegressiva = 10 - sec;
      if (sec === 10) {
        this.stepper.next();
        sub.unsubscribe();
        this.progressbarValue = 0;

        const timer2$ = interval(1000);
        const sub2 = timer2$.subscribe((sec) => {
          this.progressbarValue2 = this.progressbarValue2 + 10;
          if (sec === 10) {
            sub2.unsubscribe();
            this.progressbarValue2 = 0;
            this.stepper.next();
          }
        });
      }
    });

  }

  finalizar() {
    this.router.navigateByUrl('/user/viagem', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/user/viagem']);
    });
  }

}

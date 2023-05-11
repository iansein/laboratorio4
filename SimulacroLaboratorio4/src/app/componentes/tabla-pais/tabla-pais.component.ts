import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiCountriesService } from 'src/app/services/api-countries.service';

@Component({
  selector: 'app-tabla-pais',
  templateUrl: './tabla-pais.component.html',
  styleUrls: ['./tabla-pais.component.css'],
})
export class TablaPaisComponent implements OnInit {
  @Output() PasamosUnPais: EventEmitter<any> = new EventEmitter<any>();

  listadoPaises: any;

  constructor(private apiCountries: ApiCountriesService) {}

  ngOnInit(): void {
    this.traerPaises();
  }

  async traerPaises() {
    this.listadoPaises = await this.apiCountries.getCountries();
    this.listadoPaises.sort((a: any, b: any) => {
      return a.name.common.localeCompare(b.name.common);
    });
  }

  pasarPais(pais: any) {
    this.PasamosUnPais.emit(pais);
  }
}

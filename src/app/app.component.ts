import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User = {
    email: '',
    nom: '',
    prenom: '',
    tel: '',
    password: ''
  };

  constructor(private apiService: ApiService) { }

  registerUser() {
    this.apiService.registerUser(this.user).subscribe(
      (response) => {
        console.log('Utilisateur enregistré:', response);
        // Réinitialiser le formulaire ou effectuer d'autres actions après l'enregistrement réussi
      },
      (error) => {
        console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', error);
        // Gérer les erreurs d'enregistrement ici
      }
    );
  }
}

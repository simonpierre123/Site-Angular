import{Injectable} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
    providedIn: 'root'
    // ceci rappel a angular que se ficher  doit etre enregistré a la racine de l'application
    //et que toutes l'application partagera les memes données
})

export class FaceSnapService{
    faceSnapes: FaceSnap[] = [
        {
          id : 1,
          title:'Archibald',
          description:'mon meilleur ami depuis tout petit !',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          createdDate: new Date(),
          snaps: 5,
          location: 'Douala'
        },
        {
          id : 2,
          title: 'Archibald',
          description:'mon meilleur ami depuis tout petit !',
          imageUrl: 'https://florajia.com/wp-content/uploads/2020/02/premiere-renconter-florajia.com_.png',
          createdDate: new Date(),
          snaps: 0,
          location: 'Paris'
        
        },
      {
         id : 3,
          title:'Archibald',
          description: 'mon meilleur ami depuis tout petit !',
          imageUrl: 'https://resize.elle.fr/portrait_webp/var/plain_site/storage/images/deco/news-tendances2/habitudes-des-francais-avec-les-fleurs-3180028/69321394-1-fre-FR/Les-Francais-et-les-fleurs-decouvrez-vos-habitudes.jpg',
          createdDate: new Date(),
          snaps: 0,
        },
        {
          id : 4,
          title:'Archibald',
          description:'mon meilleur ami depuis tout petit !',
          imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
          createdDate: new Date(),
          snaps: 0,
          location: 'Douala'
        },
        {
          id : 5,
          title: 'Archibald',
          description:'mon meilleur ami depuis tout petit !',
          imageUrl: 'https://florajia.com/wp-content/uploads/2020/02/premiere-renconter-florajia.com_.png',
          createdDate: new Date(),
          snaps: 0,
          location: 'Paris'
        
        },
      {
        id : 6,
          title:'Archibald',
          description: 'mon meilleur ami depuis tout petit !',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
          createdDate: new Date(),
          snaps: 0,
        }
    ];
    getAllFaceSnape(): FaceSnap[] {
      return this.faceSnapes;
    }
    getFacesnapById(faceSnapId: number): FaceSnap{
      const faceSnap = this.faceSnapes.find(faceSnapes => faceSnapes.id === faceSnapId);
      if (!faceSnap){
        throw new Error('FaceSnap not found!');
        
      }else{
        return faceSnap;
      }

 
    }
    snapFaceSnapById(faceSnapId: number, snapType: 'J\'aime!' | 'Je n\'aime plus!' ): void {
      const faceSnap = this.getFacesnapById(faceSnapId) ;
      snapType === 'J\'aime!'? faceSnap.snaps-- : faceSnap.snaps++;
      
    }


}
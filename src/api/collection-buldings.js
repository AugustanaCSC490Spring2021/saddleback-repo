//NOT USED YET

import firebase from '../firebase-config'

// place holder if we decide to use a drop down that has all the buildings
export function getListOfAllBuildings(){
    const firestore = firebase.firestore()
    try {
    const docRef = firestore.doc("academic/")
    var myData=[];
    docRef.onSnapshot(function (snapshot){  // use on snapshot in case more buildings are added. 
        if(snapshot.exists){
            myData.push(snapshot.data())
            console.log('inside ac: ', myData)
        }
    })
    return myData;
} catch (error) {
    console.log('Wrong Document refrence', error);
  }
}
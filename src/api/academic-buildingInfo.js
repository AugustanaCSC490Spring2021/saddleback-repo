import firebase from '../firebase-config'

export function loadAcademicBuildingInfo(buildingName, callBackFunction){
    const firestore = firebase.firestore()
    const docRef = firestore.doc("academic/"+ buildingName)
    docRef.get().then(function (snapshot){
        if(snapshot.exists){
            callBackFunction(snapshot.data())
        }
       
    }).catch(function(error){
        console.log("Error while fetching snapshot: ", error)
    })
}
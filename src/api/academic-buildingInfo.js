import firebase from '../firebase-config'

export function getAcademicBuildingInfo(buildingName){
    const firestore = firebase.firestore()
    const docRef = firestore.doc("academic/"+ buildingName)
    var myData=[];
    docRef.get().then(function (snapshot){
        if(snapshot.exists){
            myData.push(snapshot.data())
            console.log('inside ac: ', myData)
        }
       
    }).catch(function(error){
        console.log("Error while fetching snapshot: ", error)
    })

    return myData
}
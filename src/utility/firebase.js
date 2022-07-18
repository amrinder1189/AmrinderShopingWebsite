import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc,collection,writeBatch,getDocs,query } from 'firebase/firestore';

 const firebaseConfig = {
    apiKey: "AIzaSyC3K8qOAnVS3eGWK8wfjvvMojjpdzMv6YI",
    authDomain: "ecomshopdotcom.firebaseapp.com",
    projectId: "ecomshopdotcom",
    storageBucket: "ecomshopdotcom.appspot.com",
    messagingSenderId: "847230719718",
    appId: "1:847230719718:web:1e55b36813938752e80d27"
  };

  const firebaseApp = initializeApp(firebaseConfig)


  // prompt when acount selected  // googlr procider
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
      prompt: "select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth,provider);
  export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);
export const db = getFirestore();


//for inserting documents in the firestore
export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
  ) => {
    const batch = writeBatch(db);
    const collectionRef = collection(db, collectionKey);
    
    objectsToAdd.forEach((object) => {
       const docRef = doc(collectionRef, object.title.toLowerCase());
       batch.set(docRef, object);
    });
  
    await batch.commit();
    console.log('done');
  };


  //for getting thr products from the firebase stor
  export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);
  
    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const { title, items } = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  
    return categoryMap;
  };




export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {displayName: "Mike"}) => {
    if(!userAuth){return}

    const userDocRef = doc(db, 'users' , userAuth.uid);


const userSnapshot = await getDoc(userDocRef);

if(!userSnapshot.exists()) {
    const {displayName , email} = userAuth;
    const createdAt = new Date();

    try{
        await setDoc(userDocRef,{
            displayName,email,createdAt,...additionalInformation
        });
    }
    catch(error){
        console.log('error creating the user',error.message);
    }
}

return userDocRef;


}

export const createAuthWithUserAndPassword = async (email,password) => {

    if(!email || !password){
        return;
    }

    return createUserWithEmailAndPassword(auth,email,password);

}
    

//sign in with email and password

export const signInWithEmailandPassword = async (email,password) => {

    if(!email || !password){
        return;
    }

    return signInWithEmailAndPassword (auth,email,password);

}
    

export const singOutUser = async () => {
   await signOut(auth);
}


export const onAuthStateChangedListener = (callback)=>{
    onAuthStateChanged(auth, callback);
}




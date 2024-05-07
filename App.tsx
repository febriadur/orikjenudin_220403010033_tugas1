import React, { useState } from 'react';
import { View, Image, Text, TextInput, Button, Alert } from 'react-native';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [validationResult, setValidationResult] = useState('');

  const handleValidation = () => {
    const reversedText = inputText.split('').reverse().join('');
    if (inputText === reversedText) {
      setValidationResult('Teks tersebut adalah palindrom!');
    } else {
      setValidationResult('Teks tersebut bukan palindrom.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <Image
      source={{
        uri:'https://cdn1-production-images-kly.akamaized.net/dQW2RrCKqIXLNmiWrweK82CijsA=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/1522604/original/043596100_1488336830-047468900_1488253553-141007-1000xauto-pangeran-arab-inspiratif.jpg'
      }}
        style={{width:200, height:200}}
      />
      <Text>Masukkan kata atau kalimat:</Text>
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginTop: 10, marginBottom: 10 }}
        onChangeText={text => setInputText(text)}
        value={inputText}
      />
      <Button title="Validasi" onPress={handleValidation} />
      <Text>{validationResult}</Text>
    </View>
  );
};

export default App;
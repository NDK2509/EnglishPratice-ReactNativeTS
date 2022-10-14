import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useState} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import WordList from '../components/word-list/WordList';
import COLORS from '../theme/colors';
import {Word} from '../utils/types';

const words: Array<Word> = [
  {id: 1, content: 'ABCD'},
  {id: 2, content: 'Nguyen Dang Ky'},
];
const WordListScreen = () => {
  const [newWord, setNewWord] = useState<{word: string; vnMeaning: string}>({
    word: '',
    vnMeaning: '',
  });
  console.log(newWord);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.textWhite, styles.title]}>Words List</Text>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <WordList list={words} />
      </ScrollView>

      <KeyboardAvoidingView>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={{
              flex: 5,
              borderColor: COLORS.white,
              borderWidth: 1,
              borderRadius: 20,
              color: COLORS.white,
              padding: 10,
            }}
            value={newWord.word}
            onChangeText={word => setNewWord({...newWord, word})}
            placeholder="Push a word, please...."
            placeholderTextColor={COLORS.white}
          />
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <FontAwesomeIcon
              icon={faPlusCircle}
              size={40}
              color={COLORS.white}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B2430',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  textWhite: {
    color: COLORS.white,
  },
});

export default WordListScreen;

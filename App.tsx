import React, {type PropsWithChildren} from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import TaskList from './components/TaskList';
import COLORS from './utils/colors';

interface Task {
  id: number;
  content: string;
};
const tasks: Array<Task> = [
  {id: 1, content: 'ABCD'},
  {id: 2, content: 'Nguyen Dnag Ky'},
];
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.textWhite, styles.title]}>Today's Tasks</Text>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <TaskList list={tasks}/>
      </ScrollView>
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
    marginBottom: 20
  },
  textWhite: {
    color: COLORS.white,
  },
});

export default App;

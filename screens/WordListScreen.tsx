import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import TaskList from '../components/todo/TaskList';
import COLORS from '../utils/colors';
import {Task} from '../utils/types';

const tasks: Array<Task> = [
  {id: 1, content: 'ABCD'},
  {id: 2, content: 'Nguyen Dang Ky'},
];
const TodosScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.textWhite, styles.title]}>Words List</Text>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <TaskList list={tasks} />
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
    marginBottom: 20,
  },
  textWhite: {
    color: COLORS.white,
  },
});

export default TodosScreen;

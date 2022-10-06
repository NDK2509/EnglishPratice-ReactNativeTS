import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import COLORS from '../utils/colors';
import {Task} from '../utils/types';

const TaskListEle: React.FC<{task: Task}> = ({task}) => {
  return (
    <TouchableOpacity style={{}}>
      <Text style={{color: COLORS.white}}>{task.content}</Text>
    </TouchableOpacity>
  );
};
const TaskList: React.FC<{list: Array<Task>}> = ({list}) => {
  return (
    <View>
      {list.map((task) => (
        <TaskListEle key={task.id} task={task} />
      ))}
    </View>
  );
};
export default TaskList;

import React, { useState } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import COLORS from '../../utils/colors';
import {Task} from '../../utils/types';
import CheckBox from '../base/CheckBox';
const styles = StyleSheet.create({
  task: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: COLORS.white,
    marginBottom: 10,
    padding: 10
  },
})
const TaskListEle: React.FC<{task: Task}> = ({task}) => {
  const [checked, setChecked]= useState<boolean>(false)
  return (
    <TouchableOpacity style={styles.task}>
      <CheckBox
        width={20}
        value={checked}
        onChange={() => setChecked(!checked)}
      />
      <View style={{flex: 3, alignItems: "center", justifyContent: "center"}}>
        <Text style={{color: COLORS.white}}>{task.content}</Text>
      </View>
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
export {TaskList as default, TaskListEle};

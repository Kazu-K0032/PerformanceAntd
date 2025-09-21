"use client";

import { useState } from "react";
import { TodoItem, mockTodos } from "./TodoMemo.mock";

export const useTodoMemo = () => {
  const [todos, setTodos] = useState<TodoItem[]>(
    mockTodos.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
  );
  const [selectedTodo, setSelectedTodo] = useState<TodoItem | null>(null);
  const [isDetailModalVisible, setIsDetailModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editingTodo, setEditingTodo] = useState<TodoItem | null>(null);

  /**
   * 新しいTODOを追加する
   * @param title TODOのタイトル
   * @param description TODOの詳細
   */
  const addTodo = (title: string, description: string) => {
    const newTodo: TodoItem = {
      id: Date.now().toString(),
      title,
      description,
      completed: false,
      createdAt: new Date(),
    };
    setTodos([newTodo, ...todos]);
  };

  /**
   * TODOの完了状態を切り替える
   * @param id TODOのID
   */
  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  /**
   * TODOを削除する
   * @param id TODOのID
   */
  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  /**
   * 完了済みTODOを削除する
   */
  const deleteCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  /**
   * TODOの詳細を表示する
   * @param todo TODOアイテム
   */
  const showTodoDetail = (todo: TodoItem) => {
    setSelectedTodo(todo);
    setIsDetailModalVisible(true);
  };

  /**
   * TODOを編集する
   * @param todo TODOアイテム
   */
  const editTodo = (todo: TodoItem) => {
    setEditingTodo(todo);
    setIsEditModalVisible(true);
  };

  /**
   * TODOを更新する
   * @param id TODOのID
   * @param title 新しいタイトル
   * @param description 新しい詳細
   */
  const updateTodo = (id: string, title: string, description: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title, description } : todo
      )
    );
    setIsEditModalVisible(false);
    setEditingTodo(null);
  };

  /**
   * モーダルを閉じる
   */
  const closeModals = () => {
    setIsDetailModalVisible(false);
    setIsEditModalVisible(false);
    setSelectedTodo(null);
    setEditingTodo(null);
  };

  return {
    todos,
    selectedTodo,
    editingTodo,
    isDetailModalVisible,
    isEditModalVisible,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompletedTodos,
    showTodoDetail,
    editTodo,
    updateTodo,
    closeModals,
  };
};

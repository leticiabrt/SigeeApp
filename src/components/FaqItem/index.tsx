import { View, Text, TouchableOpacity, ScrollView, TouchableOpacityProps } from "react-native";
import { styles } from "./styles"
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

interface faq {
  question: string,
  tableData: TableData,
  isOpen: boolean;
  onPress: () => void;
}

interface TableData {
  headers: string[];
  rows: string[][];
}

export const FaqItem = ({ question, tableData, isOpen, onPress }: faq) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.questionContainer}>
        <Text style={styles.question}>{question}</Text>
        <MaterialIcons
          name={isOpen ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
          size={24}
          color="#888"
        />
      </TouchableOpacity>
      {isOpen && (
        <ScrollView>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              {tableData.headers.map((header, index) => (
                <Text key={index} style={styles.tableHeader}>{header}</Text>
              ))}
            </View>
            {tableData.rows.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.tableRow}>
                {row.map((cell, cellIndex) => (
                  <Text key={cellIndex} style={styles.tableCell}>{cell}</Text>
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
};
import React, { useState } from 'react'; 
import { View, TextInput, StyleSheet, Pressable, Text } from 'react-native'; 
import { COLORS, SPACE, RADIUS } from '../styles/token'; 
 
export default function SearchBar({ 
  placeholder = 'Cari entri...', 
  onChange, 
}) { 
  const [queryText, setQueryText] = useState(''); 
 
  const handleChange = (text) => { 
    setQueryText(text); 
    onChange?.(text); 
  }; 

  const handleClear = () => {
    setQueryText('');
    onChange?.('');
  };
 
  return ( 
    <View style={styles.wrap}> 
      <View style={styles.container}>
        <TextInput 
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={COLORS.muted}
          value={queryText}
          onChangeText={handleChange}
          accessibilityLabel="Kolom pencarian"
        />
        {queryText.length > 0 && (
          <Pressable onPress={handleClear} style={styles.clearButton} accessibilityLabel="Hapus pencarian">
            <Text style={styles.clearText}>✕</Text>
          </Pressable>
        )}
      </View>
    </View> 
  ); 
} 
 
const styles = StyleSheet.create({ 
  wrap: { 
    paddingHorizontal: SPACE.l, 
    paddingVertical: SPACE.m, 
  }, 
  container: {
    position: 'relative',
    justifyContent: 'center',
  },
  input: { 
    borderWidth: 1, 
    borderColor: COLORS.border, 
    borderRadius: RADIUS.card, 
    paddingHorizontal: SPACE.m, 
    paddingVertical: 10, 
    paddingRight: 40, // Ruang agar teks tidak tertutup tombol clear
    backgroundColor: '#fff', 
    color: COLORS.text,
  }, 
  clearButton: {
    position: 'absolute',
    right: SPACE.m,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  clearText: {
    fontSize: 16,
    color: COLORS.muted,
    fontWeight: 'bold',
  },
});
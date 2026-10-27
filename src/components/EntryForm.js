import React, { useState } from 'react'; 
import { View, TextInput, StyleSheet, Pressable, Text } from 'react-native'; 
import { COLORS, SPACE, RADIUS, TYPO } from '../styles/token'; 
 
export default function EntryForm({ onSubmit }) { 
  const [title, setTitle] = useState(''); 
  const [date, setDate] = useState('2026-10-19'); 
  const [preview, setPreview] = useState(''); 
 
  const canSubmit = 
    title.trim().length > 0 && 
    preview.trim().length > 0; 
 
  const submit = () => { 
    if (!canSubmit) return; 
 
    onSubmit?.({ 
      id: Date.now(), 
      title: title.trim(), 
      date: date.trim(), 
      preview: preview.trim(), 
      body: preview.trim(), 
      moodImage: require('../../assets/moods/default.jpg'), 
    }); 
 
    setTitle(''); 
    setDate('2026-10-19'); 
    setPreview(''); 
  }; 
 
  return ( 
    <View style={styles.form}> 
      <Text style={styles.heading}>Tambah Entri</Text> 
 
      {/* Input Judul */}
      <TextInput 
        style={styles.input}
        placeholder="Judul entri..."
        placeholderTextColor={COLORS.muted}
        value={title}
        onChangeText={setTitle}
        accessibilityLabel="Judul entri"
      /> 
 
      {/* Input Tanggal */}
      <TextInput 
        style={styles.input}
        placeholder="Tanggal (YYYY-MM-DD)"
        placeholderTextColor={COLORS.muted}
        value={date}
        onChangeText={setDate}
        accessibilityLabel="Tanggal entri"
      /> 
 
      {/* Input Konten / Preview */}
      <TextInput 
        style={[styles.input, styles.multiline]}
        placeholder="Tuliskan isi catatan atau preview di sini..."
        placeholderTextColor={COLORS.muted}
        value={preview}
        onChangeText={setPreview}
        multiline
        numberOfLines={4}
        accessibilityLabel="Isi catatan entri"
      /> 
 
      {/* Tombol Simpan */}
      <Pressable 
        style={[styles.button, !canSubmit && styles.buttonDisabled]}
        onPress={submit}
        disabled={!canSubmit}
        accessibilityLabel="Simpan entri"
      > 
        <Text style={styles.buttonText}>Simpan</Text> 
      </Pressable> 
    </View> 
  ); 
} 
 
const styles = StyleSheet.create({ 
  form: { 
    padding: SPACE.l, 
    gap: SPACE.s, 
  }, 
  heading: { 
    fontSize: TYPO.title, 
    fontWeight: '700', 
    color: COLORS.text, 
    marginBottom: SPACE.s, 
  }, 
  input: { 
    borderWidth: 1, 
    borderColor: COLORS.border, 
    borderRadius: RADIUS.card, 
    paddingHorizontal: SPACE.m, 
    paddingVertical: 10, 
    backgroundColor: '#fff', 
    color: COLORS.text,
  }, 
  multiline: { 
    minHeight: 80, 
    textAlignVertical: 'top', 
  }, 
  button: { 
    marginTop: SPACE.s, 
    padding: SPACE.m, 
    borderRadius: RADIUS.card, 
    backgroundColor: COLORS.accent, 
    alignItems: 'center', 
  }, 
  buttonDisabled: { 
    opacity: 0.5, 
  }, 
  buttonText: { 
    color: '#fff', 
    fontWeight: '700', 
  }, 
});
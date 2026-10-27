import React from 'react'; 
import { View, Text, Image, StyleSheet, Pressable } from 'react-native'; 
import { COLORS, SPACE, RADIUS, TYPO } from '../styles/token'; 
 
export default function DiaryCard({ 
  title, 
  date, 
  preview, 
  moodImage, 
  liked = false, 
  onPress = () => {}, 
  onToggleLike = () => {}, 
}) { 
  return ( 
    <Pressable 
      onPress={onPress}
      style={({ pressed }) => [
        styles.card, 
        { opacity: pressed ? 0.85 : 1 }
      ]} 
      accessible 
      accessibilityLabel={`Entri ${title} tanggal ${date}`} 
    >
      {/* Gambar / Ikon Mood */}
      <Image 
        source={moodImage} 
        style={styles.mood} 
      /> 
       
      {/* Konten Teks */}
      <View style={styles.content}> 
        <Text style={styles.title} numberOfLines={1}>{title}</Text> 
        <Text style={styles.date}>{date}</Text> 
        <Text style={styles.preview} numberOfLines={2}>{preview}</Text> 
      </View> 

      {/* Tombol Suka / Like */}
      <Pressable onPress={onToggleLike} accessibilityLabel="Sukai entri">
        <Text style={styles.like}>{liked ? '❤️' : '🤍'}</Text> 
      </Pressable>
    </Pressable> 
  ); 
} 
 
const styles = StyleSheet.create({ 
  card: { 
    flexDirection: 'row', 
    gap: SPACE.m, 
    padding: SPACE.m, 
    borderWidth: 1, 
    borderColor: COLORS.border, 
    borderRadius: RADIUS.card, 
    backgroundColor: COLORS.surface, 
    alignItems: 'center', 
  }, 
  mood: { 
    width: 64, 
    height: 64, 
    borderRadius: RADIUS.avatar, 
    backgroundColor: '#eef2ff', 
  }, 
  content: { 
    flex: 1, 
  }, 
  title: { 
    fontSize: TYPO.title, 
    fontWeight: '700', 
    color: COLORS.text, 
  }, 
  date: { 
    fontSize: TYPO.caption, 
    color: COLORS.muted, 
    marginBottom: 6, 
  }, 
  preview: { 
    fontSize: TYPO.body, 
    color: COLORS.text, 
  }, 
  like: { 
    fontSize: 22, 
    paddingHorizontal: 6, 
  }, 
});
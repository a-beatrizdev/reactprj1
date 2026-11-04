import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
} from 'react-native';

const lessons = [
  {
    icon: '♡',
    title: 'O que é UX Design?',
    description: 'Entenda como criar experiências simples e úteis.',
    time: '5 min',
    color: '#EBD9FF',
  },
  {
    icon: '✿',
    title: 'Fundamentos de UI',
    description: 'Aprenda sobre cores, tipografia e organização.',
    time: '8 min',
    color: '#FFDCEB',
  },
  {
    icon: '⚙',
    title: 'Pesquisa e prototipação',
    description: 'Descubra como pesquisar e validar ideias.',
    time: '6 min',
    color: '#FFE1D9',
  },
  {
    icon: '⌘',
    title: 'Ferramentas para designers',
    description: 'Conheça Figma, Miro e outros recursos.',
    time: '4 min',
    color: '#FFF0D8',
  },
];

export default function ExploreScreen() {
  const [search, setSearch] = useState('');

  const filteredLessons = lessons.filter((lesson) =>
    lesson.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.kicker}>SUA JORNADA CRIATIVA</Text>

      <Text style={styles.title}>Aprender ♡</Text>

      <Text style={styles.subtitle}>
        Conhecimento também pode ser divertido!
      </Text>

      <TextInput
        style={styles.search}
        placeholder="⌕  Buscar conteúdos..."
        placeholderTextColor="#AD91A2"
        value={search}
        onChangeText={setSearch}
      />

      <View style={styles.progress}>
        <View style={styles.progressTop}>
          <Text style={styles.progressIcon}>👑</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.progressTitle}>Sua jornada</Text>
            <Text style={styles.progressDescription}>
              Continue aprendendo para desbloquear novas conquistas!
            </Text>
          </View>
          <Text style={styles.progressStar}>⭐</Text>
        </View>

        <View style={styles.progressRow}>
          <View style={styles.progressTrack}>
            <View style={styles.progressFill} />
          </View>
          <Text style={styles.progressNumber}>0 de 4</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>
        ✨ Todos os conteúdos
      </Text>

      {filteredLessons.map((lesson) => (
        <View style={styles.lesson} key={lesson.title}>
          <View
            style={[
              styles.lessonIcon,
              { backgroundColor: lesson.color },
            ]}
          >
            <Text style={styles.lessonIconText}>
              {lesson.icon}
            </Text>
          </View>

          <View style={styles.lessonContent}>
            <Text style={styles.lessonTitle}>
              {lesson.title}
            </Text>

            <Text style={styles.lessonDescription}>
              {lesson.description}
            </Text>

            <Text style={styles.lessonTime}>
              ◷ {lesson.time} de leitura
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </View>
      ))}

      {filteredLessons.length === 0 && (
        <View style={styles.empty}>
          <Text style={styles.emptyText}>
            Nenhum conteúdo encontrado ♡
          </Text>
        </View>
      )}

      <Text style={styles.footer}>
        Cada aprendizado é uma nova conquista! 🎀
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFF7FA',
  },
  container: {
    width: '100%',
    maxWidth: 650,
    alignSelf: 'center',
    padding: 20,
    paddingBottom: 35,
  },
  kicker: {
    color: '#C85D91',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1,
    marginTop: 15,
  },
  title: {
    color: '#532C46',
    fontSize: 26,
    fontWeight: '900',
    marginTop: 7,
  },
  subtitle: {
    color: '#94758A',
    fontSize: 11,
    marginTop: 5,
    marginBottom: 18,
  },
  search: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingHorizontal: 17,
    height: 46,
    borderWidth: 1,
    borderColor: '#F5DDE9',
    color: '#532C46',
    fontSize: 12,
    marginBottom: 18,
  },
  progress: {
    backgroundColor: '#F8C9DF',
    borderRadius: 21,
    padding: 16,
    marginBottom: 24,
  },
  progressTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  progressIcon: {
    fontSize: 27,
  },
  progressTitle: {
    color: '#532C46',
    fontSize: 15,
    fontWeight: '900',
  },
  progressDescription: {
    color: '#81566F',
    fontSize: 10,
    lineHeight: 15,
    marginTop: 3,
  },
  progressStar: {
    fontSize: 23,
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 16,
  },
  progressTrack: {
    height: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    flex: 1,
    overflow: 'hidden',
  },
  progressFill: {
    width: '0%',
    height: 8,
    backgroundColor: '#D95194',
  },
  progressNumber: {
    color: '#81566F',
    fontSize: 9,
    fontWeight: '800',
  },
  sectionTitle: {
    color: '#532C46',
    fontSize: 16,
    fontWeight: '900',
    marginBottom: 13,
  },
  lesson: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 11,
    borderWidth: 1,
    borderColor: '#F5E6ED',
  },
  lessonIcon: {
    width: 54,
    height: 54,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  lessonIconText: {
    fontSize: 27,
    color: '#8C416A',
  },
  lessonContent: {
    flex: 1,
  },
  lessonTitle: {
    color: '#532C46',
    fontSize: 12,
    fontWeight: '900',
  },
  lessonDescription: {
    color: '#94758A',
    fontSize: 9,
    lineHeight: 14,
    marginTop: 4,
  },
  lessonTime: {
    color: '#C85D91',
    fontSize: 9,
    fontWeight: '800',
    marginTop: 6,
  },
  arrow: {
    color: '#C85D91',
    fontSize: 27,
    paddingHorizontal: 5,
  },
  empty: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
  },
  emptyText: {
    color: '#94758A',
    textAlign: 'center',
    fontSize: 12,
  },
  footer: {
    color: '#94758A',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 20,
  },
});
import { useRouter } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const pink = '#E982B1';
const darkPink = '#B94E83';
const ink = '#532C46';
const muted = '#94758A';

const topics = [
  {
    icon: '♡',
    title: 'UX Design',
    description: 'Entenda o usuário.',
    color: '#EBD9FF',
    route: '/explore',
  },
  {
    icon: '✿',
    title: 'UI Design',
    description: 'Crie interfaces incríveis.',
    color: '#FFDCEB',
    route: '/explore',
  },
  {
    icon: '⚙',
    title: 'Processos',
    description: 'Do planejamento à entrega.',
    color: '#FFE1D9',
    route: '/explore',
  },
  {
    icon: '⌘',
    title: 'Ferramentas',
    description: 'Conheça os melhores recursos.',
    color: '#FFF0D8',
    route: '/explore',
  },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >

        {/* CABEÇALHO */}
        <View style={styles.header}>
          <View style={styles.brand}>
            <Text style={styles.bow}>🎀</Text>

            <View>
              <Text style={styles.brandName}>
                Dream Design ♡
              </Text>
              <Text style={styles.brandSubtitle}>
                CRIE • APRENDA • INSPIRE
              </Text>
            </View>
          </View>

          <Pressable
            style={styles.menu}
            onPress={() => router.push('/perfil')}
          >
            <Text style={styles.menuText}>☰</Text>
          </Pressable>
        </View>

        {/* BANNER */}
        <View style={styles.hero}>
          <View style={styles.heroDecor}>
            <Text style={styles.heart}>♡</Text>
            <Text style={styles.star}>✧</Text>
          </View>

          <Text style={styles.heroSmall}>
            SEU CANTINHO CRIATIVO
          </Text>

          <Text style={styles.heroTitle}>
            Transforme ideias em experiências!
          </Text>

          <Text style={styles.heroDescription}>
            Aprenda UX/UI Design e descubra como criar
            interfaces bonitas, funcionais e incríveis.
          </Text>

          <Pressable
            style={styles.heroButton}
            onPress={() => router.push('/explore')}
          >
            <Text style={styles.heroButtonText}>
              Começar a aprender →
            </Text>
          </Pressable>

          <View style={styles.mascot}>
            <Text style={styles.mascotText}>🐱</Text>
            <Text style={styles.mascotCaption}>
              Let's create!
            </Text>
          </View>

          <View style={styles.heroDots}>
            <View style={styles.dotActive} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>

        {/* CONTEÚDOS */}
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>
              ✨ Explore os conteúdos
            </Text>
            <Text style={styles.sectionSubtitle}>
              Descubra, aprenda e evolua!
            </Text>
          </View>

          <Pressable onPress={() => router.push('/explore')}>
            <Text style={styles.seeAll}>Ver todos →</Text>
          </Pressable>
        </View>

        <View style={styles.grid}>
          {topics.map((topic) => (
            <Pressable
              key={topic.title}
              style={({ pressed }) => [
                styles.topic,
                { backgroundColor: topic.color },
                pressed && { opacity: 0.75 },
              ]}
              onPress={() => router.push(topic.route as any)}
            >
              <Text style={styles.topicIcon}>
                {topic.icon}
              </Text>

              <Text style={styles.topicTitle}>
                {topic.title}
              </Text>

              <Text style={styles.topicDescription}>
                {topic.description}
              </Text>

              <Text style={styles.topicArrow}>➜</Text>
            </Pressable>
          ))}
        </View>

        {/* DESAFIO */}
        <View style={styles.challenge}>
          <View style={styles.challengeHeader}>
            <Text style={styles.trophy}>🏆</Text>

            <View>
              <Text style={styles.challengeLabel}>
                DESAFIO DO DIA
              </Text>
              <Text style={styles.challengeTitle}>
                Você é designer!
              </Text>
            </View>
          </View>

          <Text style={styles.challengeDescription}>
            Como você melhoraria a tela de login de um
            aplicativo para torná-la mais fácil de usar?
          </Text>

          <Pressable
            style={styles.challengeButton}
            onPress={() => router.push('/desafios')}
          >
            <Text style={styles.challengeButtonText}>
              Resolver desafio →
            </Text>
          </Pressable>

          <Text style={styles.challengeDecoration}>✧</Text>
        </View>

        <Text style={styles.footer}>
          Feito com carinho para sua jornada criativa ♡
        </Text>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFF7FA',
  },
  container: {
    width: '100%',
    maxWidth: 650,
    alignSelf: 'center',
    padding: 18,
    paddingBottom: 35,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  bow: {
    fontSize: 34,
  },
  brandName: {
    color: ink,
    fontSize: 18,
    fontWeight: '900',
  },
  brandSubtitle: {
    color: muted,
    fontSize: 8,
    letterSpacing: 1,
    marginTop: 3,
  },
  menu: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFE1EE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuText: {
    color: darkPink,
    fontSize: 20,
  },
  hero: {
    backgroundColor: '#F8C9DF',
    borderRadius: 27,
    padding: 20,
    minHeight: 285,
    overflow: 'hidden',
    marginBottom: 25,
  },
  heroSmall: {
    color: darkPink,
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1,
  },
  heroTitle: {
    color: ink,
    fontSize: 25,
    lineHeight: 31,
    fontWeight: '900',
    maxWidth: '78%',
    marginTop: 14,
  },
  heroDescription: {
    color: '#74455E',
    fontSize: 12,
    lineHeight: 19,
    maxWidth: '75%',
    marginTop: 10,
  },
  heroButton: {
    backgroundColor: '#D95194',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 25,
    alignSelf: 'flex-start',
    marginTop: 18,
  },
  heroButtonText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '900',
  },
  mascot: {
    position: 'absolute',
    right: 12,
    bottom: 48,
    alignItems: 'center',
  },
  mascotText: {
    fontSize: 80,
  },
  mascotCaption: {
    color: darkPink,
    fontSize: 9,
    fontWeight: '800',
  },
  heroDecor: {
    position: 'absolute',
    right: 25,
    top: 15,
  },
  heart: {
    fontSize: 28,
    color: '#FFFFFF',
  },
  star: {
    fontSize: 25,
    color: '#FFFFFF',
  },
  heroDots: {
    position: 'absolute',
    bottom: 15,
    left: 20,
    flexDirection: 'row',
    gap: 7,
  },
  dotActive: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: darkPink,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#F5AFCF',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  sectionTitle: {
    color: ink,
    fontSize: 17,
    fontWeight: '900',
  },
  sectionSubtitle: {
    color: muted,
    fontSize: 10,
    marginTop: 4,
  },
  seeAll: {
    color: darkPink,
    fontSize: 10,
    fontWeight: '900',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 20,
  },
  topic: {
    width: '48%',
    flexGrow: 1,
    minHeight: 145,
    borderRadius: 22,
    padding: 15,
  },
  topicIcon: {
    color: ink,
    fontSize: 29,
    marginBottom: 9,
  },
  topicTitle: {
    color: ink,
    fontSize: 14,
    fontWeight: '900',
  },
  topicDescription: {
    color: '#76566B',
    fontSize: 10,
    marginTop: 5,
  },
  topicArrow: {
    color: darkPink,
    fontSize: 17,
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  challenge: {
    backgroundColor: '#F9D5E6',
    borderRadius: 23,
    padding: 17,
    overflow: 'hidden',
  },
  challengeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  trophy: {
    fontSize: 27,
  },
  challengeLabel: {
    color: darkPink,
    fontSize: 9,
    fontWeight: '900',
  },
  challengeTitle: {
    color: ink,
    fontSize: 16,
    fontWeight: '900',
    marginTop: 3,
  },
  challengeDescription: {
    color: '#76566B',
    fontSize: 11,
    lineHeight: 17,
    marginTop: 13,
  },
  challengeButton: {
    backgroundColor: '#D95194',
    padding: 12,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 15,
  },
  challengeButtonText: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 11,
  },
  challengeDecoration: {
    position: 'absolute',
    right: 15,
    top: 65,
    color: '#FFFFFF',
    fontSize: 45,
  },
  footer: {
    textAlign: 'center',
    color: muted,
    fontSize: 9,
    marginTop: 20,
  },
});
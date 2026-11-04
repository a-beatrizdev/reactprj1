import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
    >
      <Text style={styles.kicker}>SEU CANTINHO</Text>

      <Text style={styles.title}>Meu perfil ♡</Text>

      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>🐱</Text>
        </View>

        <Text style={styles.name}>
          Designer em formação!
        </Text>

        <Text style={styles.description}>
          Explorando o mundo do UX/UI
        </Text>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            ✨ Criatividade em desenvolvimento
          </Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>
        Minha jornada
      </Text>

      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.statIcon}>📖</Text>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>
            Aulas concluídas
          </Text>
        </View>

        <View style={styles.stat}>
          <Text style={styles.statIcon}>🏆</Text>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>
            Desafios feitos
          </Text>
        </View>
      </View>

      <View style={styles.progressCard}>
        <View style={styles.progressHeader}>
          <Text style={styles.progressTitle}>
            Meu progresso
          </Text>

          <Text style={styles.progressPercent}>0%</Text>
        </View>

        <View style={styles.track}>
          <View style={styles.fill} />
        </View>

        <Text style={styles.progressDescription}>
          Continue aprendendo para completar sua jornada!
        </Text>
      </View>

      <View style={styles.message}>
        <Text style={styles.messageTitle}>
          ♡ Continue criando!
        </Text>

        <Text style={styles.messageText}>
          Cada ideia é o começo de algo incrível.
          Não tenha medo de experimentar e aprender.
        </Text>

        <Text style={styles.flower}>🌸</Text>
      </View>
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
    marginBottom: 19,
  },
  profileCard: {
    backgroundColor: '#F8D7E7',
    borderRadius: 23,
    padding: 22,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: '#F1A9CA',
  },
  avatarText: {
    fontSize: 57,
  },
  name: {
    color: '#532C46',
    fontSize: 17,
    fontWeight: '900',
    marginTop: 13,
  },
  description: {
    color: '#81566F',
    fontSize: 11,
    marginTop: 5,
  },
  badge: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 13,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 13,
  },
  badgeText: {
    color: '#C85D91',
    fontSize: 9,
    fontWeight: '800',
  },
  sectionTitle: {
    color: '#532C46',
    fontSize: 16,
    fontWeight: '900',
    marginTop: 23,
    marginBottom: 12,
  },
  stats: {
    flexDirection: 'row',
    gap: 12,
  },
  stat: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F5E6ED',
  },
  statIcon: {
    fontSize: 25,
  },
  statNumber: {
    color: '#C85D91',
    fontSize: 23,
    fontWeight: '900',
    marginTop: 7,
  },
  statLabel: {
    color: '#94758A',
    fontSize: 9,
    marginTop: 4,
  },
  progressCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#F5E6ED',
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressTitle: {
    color: '#532C46',
    fontSize: 12,
    fontWeight: '900',
  },
  progressPercent: {
    color: '#C85D91',
    fontWeight: '900',
    fontSize: 12,
  },
  track: {
    height: 9,
    backgroundColor: '#FCE5EF',
    borderRadius: 10,
    marginTop: 12,
    overflow: 'hidden',
  },
  fill: {
    width: '0%',
    height: 9,
    backgroundColor: '#D95194',
  },
  progressDescription: {
    color: '#94758A',
    fontSize: 9,
    marginTop: 9,
  },
  message: {
    backgroundColor: '#F0E6FF',
    borderRadius: 18,
    padding: 16,
    marginTop: 15,
    overflow: 'hidden',
  },
  messageTitle: {
    color: '#532C46',
    fontSize: 13,
    fontWeight: '900',
  },
  messageText: {
    color: '#806C82',
    fontSize: 10,
    lineHeight: 16,
    marginTop: 6,
    maxWidth: '85%',
  },
  flower: {
    position: 'absolute',
    right: 12,
    bottom: 10,
    fontSize: 33,
  },
});
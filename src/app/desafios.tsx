import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';

const alternatives = [
  'Deixar a tela cheia de informações.',
  'Usar um design limpo e intuitivo.',
  'Mudar as cores toda hora.',
];

export default function ChallengesScreen() {
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
    >
      <Text style={styles.kicker}>TESTE SEUS CONHECIMENTOS</Text>

      <Text style={styles.title}>Desafios ♡</Text>

      <View style={styles.banner}>
        <Text style={styles.bannerIcon}>⭐</Text>
        <View style={{ flex: 1 }}>
          <Text style={styles.bannerTitle}>Desafio do dia</Text>
          <Text style={styles.bannerDescription}>
            Um pequeno desafio para sua mente criativa!
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.question}>
          Qual é a melhor prática de UX?
        </Text>

        <Text style={styles.instruction}>
          Escolha uma alternativa:
        </Text>

        {alternatives.map((item, index) => (
          <Pressable
            key={item}
            onPress={() => {
              setSelected(index);
              setShowResult(false);
            }}
            style={[
              styles.option,
              selected === index && styles.optionSelected,
            ]}
          >
            <View
              style={[
                styles.radio,
                selected === index && styles.radioSelected,
              ]}
            />

            <Text style={styles.optionText}>{item}</Text>
          </Pressable>
        ))}

        <Pressable
          disabled={selected === null}
          onPress={() => setShowResult(true)}
          style={[
            styles.button,
            selected === null && { opacity: 0.5 },
          ]}
        >
          <Text style={styles.buttonText}>
            Conferir resposta
          </Text>
        </Pressable>

        {showResult && (
          <View style={styles.result}>
            <Text style={styles.resultTitle}>
              {selected === 1
                ? 'Muito bem! ♡'
                : 'Continue praticando! ♡'}
            </Text>

            <Text style={styles.resultText}>
              {selected === 1
                ? 'Um design limpo ajuda o usuário a encontrar o que precisa.'
                : 'A melhor opção é a segunda. Uma interface simples facilita a experiência do usuário.'}
            </Text>
          </View>
        )}
      </View>

      <Text style={styles.footer}>
        Você está evoluindo a cada desafio! 🎀
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
    marginBottom: 18,
  },
  banner: {
    backgroundColor: '#F8C9DF',
    padding: 17,
    borderRadius: 19,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
  },
  bannerIcon: {
    fontSize: 29,
  },
  bannerTitle: {
    color: '#532C46',
    fontSize: 14,
    fontWeight: '900',
  },
  bannerDescription: {
    color: '#81566F',
    fontSize: 10,
    marginTop: 4,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 21,
    padding: 17,
    borderWidth: 1,
    borderColor: '#F5E6ED',
  },
  question: {
    color: '#532C46',
    fontSize: 19,
    fontWeight: '900',
    lineHeight: 26,
  },
  instruction: {
    color: '#94758A',
    fontSize: 11,
    marginTop: 9,
    marginBottom: 15,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F1E1EA',
    borderRadius: 13,
    padding: 14,
    marginBottom: 10,
  },
  optionSelected: {
    backgroundColor: '#FFF0F6',
    borderColor: '#E982B1',
  },
  radio: {
    width: 18,
    height: 18,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#D6A9C0',
    marginRight: 11,
  },
  radioSelected: {
    backgroundColor: '#D95194',
    borderColor: '#D95194',
  },
  optionText: {
    flex: 1,
    color: '#67465A',
    fontSize: 11,
  },
  button: {
    backgroundColor: '#D95194',
    borderRadius: 25,
    padding: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '900',
  },
  result: {
    backgroundColor: '#F0E6FF',
    borderRadius: 14,
    padding: 14,
    marginTop: 15,
  },
  resultTitle: {
    color: '#532C46',
    fontWeight: '900',
    fontSize: 13,
  },
  resultText: {
    color: '#76566B',
    fontSize: 10,
    lineHeight: 16,
    marginTop: 5,
  },
  footer: {
    textAlign: 'center',
    color: '#94758A',
    fontSize: 10,
    marginTop: 20,
  },
});
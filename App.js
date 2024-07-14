/*import React from 'react';
import { View, StyleSheet } from 'react-native';
//import Signup from './screen/signup';
//import Login from './screen/login';
import GetStarted from './screen/welcome';

/*const App = () => {
  return (
    <View style={styles.container}>
      <Login /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;*/


/*export default function App() {
  return (
    <View style={styles.container}>
      <Signup />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

*/



export default function App() {
  const [currentPage, setCurrentPage] = useState('GetStarted');

  const handleGetStarted = () => {
    setCurrentPage('Home');
  };

  return (
    <View style={styles.container}>
      {currentPage === 'GetStarted' ? (
        <GetStarted onGetStarted={handleGetStarted} />
      ) : (
        <View style={styles.homeContainer}>
          <Text style={styles.homeText}>Home Page</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  homeText: {
    fontSize: 24,
    color: '#333',
  },
});


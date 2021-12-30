import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Tab1 from '../TodoPages/Todo';
import Tab2 from '../TodoPages/TodoShortTerm/ShortMaker';
import { colors } from '../../styles/AppStyles';


const TabNav = () => {
    return (
        <Container>
          <Tabs
          locked = {true}
          >
            <Tab 
            heading="appointments" 
            activeTabStyle = {styles.activeBar}
            tabStyle = {styles.inactiveBar}
            >
              <Tab2 />
            </Tab>
            <Tab 
            heading="tasks"
            activeTabStyle = {styles.activeBar}
            tabStyle = {styles.inactiveBar}            
            >
              <Tab1 />
            </Tab>
          </Tabs>
        </Container>
      );
  
}

export default TabNav

const styles = StyleSheet.create({
  activeBar: {
    backgroundColor: colors.secondary,
  },
  inactiveBar: {backgroundColor: colors.primary}
})

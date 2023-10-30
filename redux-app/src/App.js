import React from 'react'
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  return (
   <Provider store={store}>
    <div>
     <ul>
        <li>Home, About ve Contact Page ler oluşturulacak</li>
        <li>Bunlara ait componentler oluşturulacak</li>
        <li>Layout ve içinde header ve footer olacak</li>
        <li>Home sayfasında 3 adet ürün resmi ve altlarında ürün isimleri</li>
        <li>About sayfasında hizmetlerin listelendiği bölüm</li>
        <li>Contact sayfasında basit bir iletişim bilgileri ve iletişim formu</li>
      </ul>
    </div>
   </Provider>
  )
}

export default App
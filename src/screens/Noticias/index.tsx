import { View, Text, ScrollView } from "react-native";
import { styles } from "./styles"
import { useEffect, useState } from "react";
import { INoticia } from "../../services/data/Noticia";
import { useAuth } from "../../hook/auth";
import { apiNoticia } from "../../services/data";
import { FlatList } from "react-native-gesture-handler";

export function Noticias() {
    /*Lógica de listar as noticia*/
  const [noticia, setNoticia] = useState<INoticia[]>([])
  const { setLoading, user } = useAuth()
  useEffect(() => {
    setLoading(true)
    async function loadMessage() {
      const response = await apiNoticia.index()
      setNoticia(response.data.dados)
    }
    setLoading(false)
    loadMessage()
  }, [])

  interface itemReserva {
    item: INoticia
  }

  // foreach para percorrer todas reservas
  const renderItem = (({ item }: itemReserva) => {
      return (
        <View style={styles.caixa}>
            <Text style={styles.tituloNoticia}>{item.titulo}</Text>
            <Text style={styles.textoNoticia}>{item.noticia}</Text>
            <Text style={styles.horarioNoticia}>{item.dia}, {item.horario}</Text>
        </View>
      )
    
  })
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.texto}>NOTÍCIAS</Text>
            </View>
            <ScrollView style={styles.noticias}>
                {
                        noticia.length > 0 && (
                            <FlatList
                                data={noticia}
                                renderItem={renderItem}
                                keyExtractor={item => String(item.idNoticias)}
                            />
                        )
                    }
            </ScrollView>
        </View>
    );
}

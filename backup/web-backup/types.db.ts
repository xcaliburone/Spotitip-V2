// export type Json =
//   | string
//   | number
//   | boolean
//   | null
//   | { [key: string]: Json | undefined }
//   | Json[]

// export type Database = {
//   public: {
//     Tables: {
//       album: {
//         Row: {
//           duration: string
//           id: string
//           num_song: number
//           release: string
//           title: string
//         }
//         Insert: {
//           duration: string
//           id: string
//           num_song: number
//           release: string
//           title: string
//         }
//         Update: {
//           duration?: string
//           id?: string
//           num_song?: number
//           release?: string
//           title?: string
//         }
//         Relationships: []
//       }
//       album_artist_has: {
//         Row: {
//           album_id: string
//           artist_id: string
//           release: string
//         }
//         Insert: {
//           album_id: string
//           artist_id: string
//           release: string
//         }
//         Update: {
//           album_id?: string
//           artist_id?: string
//           release?: string
//         }
//         Relationships: [
//           {
//             foreignKeyName: "album_id_has"
//             columns: ["album_id"]
//             isOneToOne: false
//             referencedRelation: "album"
//             referencedColumns: ["id"]
//           },
//           {
//             foreignKeyName: "artist_id_has"
//             columns: ["artist_id"]
//             isOneToOne: false
//             referencedRelation: "artist"
//             referencedColumns: ["id"]
//           },
//         ]
//       }
//       artist: {
//         Row: {
//           email: string
//           followers: number | null
//           id: string
//           name: string
//           password: string
//         }
//         Insert: {
//           email: string
//           followers?: number | null
//           id: string
//           name: string
//           password: string
//         }
//         Update: {
//           email?: string
//           followers?: number | null
//           id?: string
//           name?: string
//           password?: string
//         }
//         Relationships: []
//       }
//       playlist: {
//         Row: {
//           duration: string | null
//           id: string
//           name: string
//           num_song: number | null
//         }
//         Insert: {
//           duration?: string | null
//           id: string
//           name: string
//           num_song?: number | null
//         }
//         Update: {
//           duration?: string | null
//           id?: string
//           name?: string
//           num_song?: number | null
//         }
//         Relationships: []
//       }
//       song: {
//         Row: {
//           duration: string
//           genre: string
//           id: string
//           listeners: number | null
//           title: string
//         }
//         Insert: {
//           duration: string
//           genre: string
//           id: string
//           listeners?: number | null
//           title: string
//         }
//         Update: {
//           duration?: string
//           genre?: string
//           id?: string
//           listeners?: number | null
//           title?: string
//         }
//         Relationships: []
//       }
//       song_album_contains: {
//         Row: {
//           album_id: string
//           song_id: string
//         }
//         Insert: {
//           album_id: string
//           song_id: string
//         }
//         Update: {
//           album_id?: string
//           song_id?: string
//         }
//         Relationships: [
//           {
//             foreignKeyName: "album_id_contains"
//             columns: ["album_id"]
//             isOneToOne: false
//             referencedRelation: "album"
//             referencedColumns: ["id"]
//           },
//           {
//             foreignKeyName: "song_id_contains_album"
//             columns: ["song_id"]
//             isOneToOne: false
//             referencedRelation: "song"
//             referencedColumns: ["id"]
//           },
//         ]
//       }
//       song_artist_sing: {
//         Row: {
//           artist_id: string
//           song_id: string
//         }
//         Insert: {
//           artist_id: string
//           song_id: string
//         }
//         Update: {
//           artist_id?: string
//           song_id?: string
//         }
//         Relationships: [
//           {
//             foreignKeyName: "artist_id_sing"
//             columns: ["artist_id"]
//             isOneToOne: false
//             referencedRelation: "artist"
//             referencedColumns: ["id"]
//           },
//           {
//             foreignKeyName: "song_id_sing"
//             columns: ["song_id"]
//             isOneToOne: false
//             referencedRelation: "song"
//             referencedColumns: ["id"]
//           },
//         ]
//       }
//       song_playlist_contains: {
//         Row: {
//           playlist_id: string
//           song_id: string
//         }
//         Insert: {
//           playlist_id: string
//           song_id: string
//         }
//         Update: {
//           playlist_id?: string
//           song_id?: string
//         }
//         Relationships: [
//           {
//             foreignKeyName: "playlist_id_contains"
//             columns: ["playlist_id"]
//             isOneToOne: false
//             referencedRelation: "playlist"
//             referencedColumns: ["id"]
//           },
//           {
//             foreignKeyName: "song_id_contains_playlist"
//             columns: ["song_id"]
//             isOneToOne: false
//             referencedRelation: "song"
//             referencedColumns: ["id"]
//           },
//         ]
//       }
//       user: {
//         Row: {
//           email: string
//           followers: number | null
//           following: number | null
//           id: string
//           name: string
//           password: string
//         }
//         Insert: {
//           email: string
//           followers?: number | null
//           following?: number | null
//           id: string
//           name: string
//           password: string
//         }
//         Update: {
//           email?: string
//           followers?: number | null
//           following?: number | null
//           id?: string
//           name?: string
//           password?: string
//         }
//         Relationships: []
//       }
//       user_artist_follow: {
//         Row: {
//           artist_id: string
//           user_id: string
//         }
//         Insert: {
//           artist_id: string
//           user_id: string
//         }
//         Update: {
//           artist_id?: string
//           user_id?: string
//         }
//         Relationships: [
//           {
//             foreignKeyName: "artist_id_follow"
//             columns: ["artist_id"]
//             isOneToOne: false
//             referencedRelation: "artist"
//             referencedColumns: ["id"]
//           },
//           {
//             foreignKeyName: "user_id_follow_artist"
//             columns: ["user_id"]
//             isOneToOne: false
//             referencedRelation: "user"
//             referencedColumns: ["id"]
//           },
//         ]
//       }
//       user_playlist_create: {
//         Row: {
//           date_created: string
//           playlist_id: string
//           user_id: string
//         }
//         Insert: {
//           date_created: string
//           playlist_id: string
//           user_id: string
//         }
//         Update: {
//           date_created?: string
//           playlist_id?: string
//           user_id?: string
//         }
//         Relationships: [
//           {
//             foreignKeyName: "playlist_id_create"
//             columns: ["playlist_id"]
//             isOneToOne: false
//             referencedRelation: "playlist"
//             referencedColumns: ["id"]
//           },
//           {
//             foreignKeyName: "user_id_create"
//             columns: ["user_id"]
//             isOneToOne: false
//             referencedRelation: "user"
//             referencedColumns: ["id"]
//           },
//         ]
//       }
//       user_playlist_follow: {
//         Row: {
//           playlist_id: string
//           user_id: string
//         }
//         Insert: {
//           playlist_id: string
//           user_id: string
//         }
//         Update: {
//           playlist_id?: string
//           user_id?: string
//         }
//         Relationships: [
//           {
//             foreignKeyName: "playlist_id_follow"
//             columns: ["playlist_id"]
//             isOneToOne: false
//             referencedRelation: "playlist"
//             referencedColumns: ["id"]
//           },
//           {
//             foreignKeyName: "user_id_follow_playlist"
//             columns: ["user_id"]
//             isOneToOne: false
//             referencedRelation: "user"
//             referencedColumns: ["id"]
//           },
//         ]
//       }
//       user_song_liked: {
//         Row: {
//           song_id: string
//           user_id: string
//         }
//         Insert: {
//           song_id: string
//           user_id: string
//         }
//         Update: {
//           song_id?: string
//           user_id?: string
//         }
//         Relationships: [
//           {
//             foreignKeyName: "song_id_liked"
//             columns: ["song_id"]
//             isOneToOne: false
//             referencedRelation: "song"
//             referencedColumns: ["id"]
//           },
//           {
//             foreignKeyName: "user_id_liked"
//             columns: ["user_id"]
//             isOneToOne: false
//             referencedRelation: "user"
//             referencedColumns: ["id"]
//           },
//         ]
//       }
//     }
//     Views: {
//       [_ in never]: never
//     }
//     Functions: {
//       [_ in never]: never
//     }
//     Enums: {
//       [_ in never]: never
//     }
//     CompositeTypes: {
//       [_ in never]: never
//     }
//   }
// }

// type PublicSchema = Database[Extract<keyof Database, "public">]

// export type Tables<
//   PublicTableNameOrOptions extends
//     | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
//     | { schema: keyof Database },
//   TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
//     ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
//         Database[PublicTableNameOrOptions["schema"]]["Views"])
//     : never = never,
// > = PublicTableNameOrOptions extends { schema: keyof Database }
//   ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
//       Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
//       Row: infer R
//     }
//     ? R
//     : never
//   : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
//         PublicSchema["Views"])
//     ? (PublicSchema["Tables"] &
//         PublicSchema["Views"])[PublicTableNameOrOptions] extends {
//         Row: infer R
//       }
//       ? R
//       : never
//     : never

// export type TablesInsert<
//   PublicTableNameOrOptions extends
//     | keyof PublicSchema["Tables"]
//     | { schema: keyof Database },
//   TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
//     ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
//     : never = never,
// > = PublicTableNameOrOptions extends { schema: keyof Database }
//   ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
//       Insert: infer I
//     }
//     ? I
//     : never
//   : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
//     ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
//         Insert: infer I
//       }
//       ? I
//       : never
//     : never

// export type TablesUpdate<
//   PublicTableNameOrOptions extends
//     | keyof PublicSchema["Tables"]
//     | { schema: keyof Database },
//   TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
//     ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
//     : never = never,
// > = PublicTableNameOrOptions extends { schema: keyof Database }
//   ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
//       Update: infer U
//     }
//     ? U
//     : never
//   : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
//     ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
//         Update: infer U
//       }
//       ? U
//       : never
//     : never

// export type Enums<
//   PublicEnumNameOrOptions extends
//     | keyof PublicSchema["Enums"]
//     | { schema: keyof Database },
//   EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
//     ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
//     : never = never,
// > = PublicEnumNameOrOptions extends { schema: keyof Database }
//   ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
//   : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
//     ? PublicSchema["Enums"][PublicEnumNameOrOptions]
//     : never

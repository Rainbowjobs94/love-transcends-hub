export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      ai_memory_categories: {
        Row: {
          created_at: string
          description: string | null
          icon: string | null
          id: string
          name: string
          sort_order: number | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          name: string
          sort_order?: number | null
        }
        Update: {
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          name?: string
          sort_order?: number | null
        }
        Relationships: []
      }
      ai_memory_entries: {
        Row: {
          category_id: string
          content: string
          created_at: string
          id: string
          is_active: boolean
          title: string
          updated_at: string
        }
        Insert: {
          category_id: string
          content: string
          created_at?: string
          id?: string
          is_active?: boolean
          title: string
          updated_at?: string
        }
        Update: {
          category_id?: string
          content?: string
          created_at?: string
          id?: string
          is_active?: boolean
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_memory_entries_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "ai_memory_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      chat_conversations: {
        Row: {
          created_at: string
          id: string
          title: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          title?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          title?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      chat_messages: {
        Row: {
          content: string
          conversation_id: string
          created_at: string
          id: string
          role: string
        }
        Insert: {
          content: string
          conversation_id: string
          created_at?: string
          id?: string
          role: string
        }
        Update: {
          content?: string
          conversation_id?: string
          created_at?: string
          id?: string
          role?: string
        }
        Relationships: [
          {
            foreignKeyName: "chat_messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "chat_conversations"
            referencedColumns: ["id"]
          },
        ]
      }
      cms_app_branding: {
        Row: {
          app_key: string
          app_name: string
          description: string | null
          favicon_url: string | null
          id: string
          logo_url: string | null
          primary_color: string | null
          updated_at: string
        }
        Insert: {
          app_key: string
          app_name: string
          description?: string | null
          favicon_url?: string | null
          id?: string
          logo_url?: string | null
          primary_color?: string | null
          updated_at?: string
        }
        Update: {
          app_key?: string
          app_name?: string
          description?: string | null
          favicon_url?: string | null
          id?: string
          logo_url?: string | null
          primary_color?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      cms_external_links: {
        Row: {
          created_at: string
          description: string | null
          id: string
          is_active: boolean
          link_type: string
          sort_order: number | null
          thumbnail_url: string | null
          title: string
          url: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          link_type?: string
          sort_order?: number | null
          thumbnail_url?: string | null
          title: string
          url: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          link_type?: string
          sort_order?: number | null
          thumbnail_url?: string | null
          title?: string
          url?: string
        }
        Relationships: []
      }
      cms_hero_videos: {
        Row: {
          created_at: string
          id: string
          is_active: boolean
          sort_order: number | null
          source_type: string
          title: string
          url: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_active?: boolean
          sort_order?: number | null
          source_type?: string
          title: string
          url: string
        }
        Update: {
          created_at?: string
          id?: string
          is_active?: boolean
          sort_order?: number | null
          source_type?: string
          title?: string
          url?: string
        }
        Relationships: []
      }
      cms_media: {
        Row: {
          access_tier: string
          created_at: string
          description: string | null
          id: string
          is_active: boolean
          media_type: string
          price: number | null
          sort_order: number | null
          source_type: string
          thumbnail_url: string | null
          title: string
          updated_at: string
          url: string
        }
        Insert: {
          access_tier?: string
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          media_type?: string
          price?: number | null
          sort_order?: number | null
          source_type?: string
          thumbnail_url?: string | null
          title: string
          updated_at?: string
          url: string
        }
        Update: {
          access_tier?: string
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          media_type?: string
          price?: number | null
          sort_order?: number | null
          source_type?: string
          thumbnail_url?: string | null
          title?: string
          updated_at?: string
          url?: string
        }
        Relationships: []
      }
      mining_sessions: {
        Row: {
          avg_hash_rate: number
          blocks_mined: number
          created_at: string
          ended_at: string | null
          id: string
          rc_earned: number
          started_at: string
          tier: Database["public"]["Enums"]["mining_tier"]
          user_id: string
        }
        Insert: {
          avg_hash_rate?: number
          blocks_mined?: number
          created_at?: string
          ended_at?: string | null
          id?: string
          rc_earned?: number
          started_at?: string
          tier?: Database["public"]["Enums"]["mining_tier"]
          user_id: string
        }
        Update: {
          avg_hash_rate?: number
          blocks_mined?: number
          created_at?: string
          ended_at?: string | null
          id?: string
          rc_earned?: number
          started_at?: string
          tier?: Database["public"]["Enums"]["mining_tier"]
          user_id?: string
        }
        Relationships: []
      }
      mining_transactions: {
        Row: {
          amount: number
          block_number: number
          created_at: string
          id: string
          type: Database["public"]["Enums"]["mining_tx_type"]
          user_id: string
        }
        Insert: {
          amount: number
          block_number: number
          created_at?: string
          id?: string
          type?: Database["public"]["Enums"]["mining_tx_type"]
          user_id: string
        }
        Update: {
          amount?: number
          block_number?: number
          created_at?: string
          id?: string
          type?: Database["public"]["Enums"]["mining_tx_type"]
          user_id?: string
        }
        Relationships: []
      }
      mining_wallets: {
        Row: {
          blocks_validated: number
          created_at: string
          current_tier: Database["public"]["Enums"]["mining_tier"]
          id: string
          rc_balance: number
          total_mined: number
          updated_at: string
          user_id: string
        }
        Insert: {
          blocks_validated?: number
          created_at?: string
          current_tier?: Database["public"]["Enums"]["mining_tier"]
          id?: string
          rc_balance?: number
          total_mined?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          blocks_validated?: number
          created_at?: string
          current_tier?: Database["public"]["Enums"]["mining_tier"]
          id?: string
          rc_balance?: number
          total_mined?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          display_name: string | null
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      add_mining_reward: {
        Args: { _amount: number; _block_num: number }
        Returns: undefined
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
      mining_tier: "bronze" | "silver"
      mining_tx_type: "block_reward" | "bonus"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
      mining_tier: ["bronze", "silver"],
      mining_tx_type: ["block_reward", "bonus"],
    },
  },
} as const

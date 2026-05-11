export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  __InternalSupabase: {
    PostgrestVersion: "14.5";
  };
  public: {
    Tables: {
      order_items: {
        Row: {
          created_at: string;
          id: string;
          order_id: string;
          product_id: string;
          product_slug: string;
          product_title: string;
          quantity: number;
          unit_price_cents: number;
        };
        Insert: {
          created_at?: string;
          id?: string;
          order_id: string;
          product_id: string;
          product_slug: string;
          product_title: string;
          quantity: number;
          unit_price_cents: number;
        };
        Update: {
          created_at?: string;
          id?: string;
          order_id?: string;
          product_id?: string;
          product_slug?: string;
          product_title?: string;
          quantity?: number;
          unit_price_cents?: number;
        };
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey";
            columns: ["order_id"];
            isOneToOne: false;
            referencedRelation: "orders";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "order_items_product_id_fkey";
            columns: ["product_id"];
            isOneToOne: false;
            referencedRelation: "products";
            referencedColumns: ["id"];
          },
        ];
      };
      orders: {
        Row: {
          abacatepay_billing_id: string | null;
          created_at: string;
          customer_email: string;
          customer_name: string;
          customer_phone: string;
          customer_tax_id: string;
          guest_device_id: string | null;
          guest_ip: string | null;
          guest_user_agent: string | null;
          id: string;
          metadata: Json | null;
          paid_at: string | null;
          payment_url: string | null;
          status: Database["public"]["Enums"]["order_status"];
          total_cents: number;
          updated_at: string;
          user_id: string | null;
        };
        Insert: {
          abacatepay_billing_id?: string | null;
          created_at?: string;
          customer_email: string;
          customer_name: string;
          customer_phone: string;
          customer_tax_id: string;
          guest_device_id?: string | null;
          guest_ip?: string | null;
          guest_user_agent?: string | null;
          id?: string;
          metadata?: Json | null;
          paid_at?: string | null;
          payment_url?: string | null;
          status?: Database["public"]["Enums"]["order_status"];
          total_cents: number;
          updated_at?: string;
          user_id?: string | null;
        };
        Update: {
          abacatepay_billing_id?: string | null;
          created_at?: string;
          customer_email?: string;
          customer_name?: string;
          customer_phone?: string;
          customer_tax_id?: string;
          guest_device_id?: string | null;
          guest_ip?: string | null;
          guest_user_agent?: string | null;
          id?: string;
          metadata?: Json | null;
          paid_at?: string | null;
          payment_url?: string | null;
          status?: Database["public"]["Enums"]["order_status"];
          total_cents?: number;
          updated_at?: string;
          user_id?: string | null;
        };
        Relationships: [];
      };
      products: {
        Row: {
          active: boolean;
          author: string;
          category: string;
          cover_image: string;
          created_at: string;
          description: string;
          ebook_file: string;
          format: string;
          id: string;
          long_description: string;
          pages: number;
          price_cents: number;
          slug: string;
          title: string;
          updated_at: string;
        };
        Insert: {
          active?: boolean;
          author: string;
          category: string;
          cover_image: string;
          created_at?: string;
          description: string;
          ebook_file: string;
          format: string;
          id?: string;
          long_description: string;
          pages: number;
          price_cents: number;
          slug: string;
          title: string;
          updated_at?: string;
        };
        Update: {
          active?: boolean;
          author?: string;
          category?: string;
          cover_image?: string;
          created_at?: string;
          description?: string;
          ebook_file?: string;
          format?: string;
          id?: string;
          long_description?: string;
          pages?: number;
          price_cents?: number;
          slug?: string;
          title?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      profiles: {
        Row: {
          created_at: string;
          full_name: string;
          id: string;
          phone: string;
          tax_id: string | null;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          full_name?: string;
          id: string;
          phone?: string;
          tax_id?: string | null;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          full_name?: string;
          id?: string;
          phone?: string;
          tax_id?: string | null;
          updated_at?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      user_ebooks: {
        Row: {
          author: string | null;
          category: string | null;
          cover_image: string | null;
          description: string | null;
          ebook_file: string | null;
          format: string | null;
          last_order_id: string | null;
          pages: number | null;
          product_id: string | null;
          purchased_at: string | null;
          slug: string | null;
          title: string | null;
          user_id: string | null;
        };
        Relationships: [];
      };
    };
    Functions: {
      claim_guest_orders: {
        Args: { device_id: string };
        Returns: number;
      };
      get_guest_order: {
        Args: { p_order_id: string; p_device_id: string };
        Returns: Array<{
          id: string;
          status: Database["public"]["Enums"]["order_status"];
          total_cents: number;
          customer_email: string;
          created_at: string;
          paid_at: string | null;
        }>;
      };
      get_guest_order_items: {
        Args: { p_order_id: string; p_device_id: string };
        Returns: Array<{
          product_id: string;
          product_slug: string;
          product_title: string;
          quantity: number;
          unit_price_cents: number;
        }>;
      };
      mark_order_paid: {
        Args: { billing_id: string; payer_tax_id?: string | null };
        Returns: string | null;
      };
      set_order_status_from_webhook: {
        Args: {
          billing_id: string;
          new_status: Database["public"]["Enums"]["order_status"];
        };
        Returns: string | null;
      };
      user_owns_ebook: { Args: { product_slug: string }; Returns: boolean };
    };
    Enums: {
      order_status: "pending" | "paid" | "cancelled" | "failed" | "refunded";
    };
    CompositeTypes: Record<string, never>;
  };
};

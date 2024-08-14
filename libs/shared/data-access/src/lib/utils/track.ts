export const track = (
  user_id: string | null
): {
  created_at?: Date;
  updated_at?: Date;
  created_by?: string;
  updated_by?: string;
} => {
  const now = new Date();
  return {
    created_at: now,
    updated_at: now,
    created_by: user_id,
    updated_by: user_id,
  };
};

export const archive = (
  user_id: string
): {
  archived_at?: Date;
  archived_by?: string;
} => {
  const now = new Date();
  return {
    archived_at: now,
    archived_by: user_id,
  };
};

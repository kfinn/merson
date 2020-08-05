# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_08_05_040456) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cities", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "city_region_borders", force: :cascade do |t|
    t.bigint "city_region_id", null: false
    t.bigint "field_region_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["city_region_id"], name: "index_city_region_borders_on_city_region_id"
    t.index ["field_region_id"], name: "index_city_region_borders_on_field_region_id"
  end

  create_table "city_regions", force: :cascade do |t|
    t.bigint "city_id", null: false
    t.boolean "shield", default: false, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["city_id"], name: "index_city_regions_on_city_id"
  end

  create_table "edge_field_regions", force: :cascade do |t|
    t.bigint "edge_id", null: false
    t.bigint "field_region_id", null: false
    t.boolean "left_of_road"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["edge_id", "left_of_road"], name: "index_edge_field_regions_on_edge_id_and_left_of_road", unique: true
    t.index ["edge_id"], name: "index_edge_field_regions_on_edge_id"
    t.index ["field_region_id"], name: "index_edge_field_regions_on_field_region_id"
  end

  create_table "edge_pair_members", force: :cascade do |t|
    t.bigint "edge_pair_id"
    t.bigint "edge_id"
    t.boolean "older", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["edge_id"], name: "index_edge_pair_members_on_edge_id", unique: true
    t.index ["edge_pair_id", "older"], name: "index_edge_pair_members_on_edge_pair_id_and_older", unique: true
    t.index ["edge_pair_id"], name: "index_edge_pair_members_on_edge_pair_id"
  end

  create_table "edge_pairs", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "edges", force: :cascade do |t|
    t.string "type", null: false
    t.bigint "tile_id", null: false
    t.string "orientation_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "city_region_id"
    t.bigint "road_segment_id"
    t.index ["city_region_id"], name: "index_edges_on_city_region_id"
    t.index ["orientation_id"], name: "index_edges_on_orientation_id"
    t.index ["road_segment_id"], name: "index_edges_on_road_segment_id"
    t.index ["tile_id", "orientation_id"], name: "index_edges_on_tile_id_and_orientation_id", unique: true
    t.index ["tile_id"], name: "index_edges_on_tile_id"
    t.index ["type"], name: "index_edges_on_type"
  end

  create_table "field_regions", force: :cascade do |t|
    t.bigint "field_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["field_id"], name: "index_field_regions_on_field_id"
  end

  create_table "fields", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "games", force: :cascade do |t|
    t.string "key", null: false
    t.datetime "started_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "turn_id"
    t.index ["key"], name: "index_games_on_key"
    t.index ["turn_id"], name: "index_games_on_turn_id"
  end

  create_table "meeple_plays", force: :cascade do |t|
    t.bigint "player_id", null: false
    t.string "tile_feature_type", null: false
    t.bigint "tile_feature_id", null: false
    t.integer "meeple_index"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["player_id", "meeple_index"], name: "index_meeple_plays_on_player_id_and_meeple_index", unique: true
    t.index ["player_id"], name: "index_meeple_plays_on_player_id"
    t.index ["tile_feature_type", "tile_feature_id"], name: "index_meeple_plays_on_tile_feature_type_and_tile_feature_id", unique: true
  end

  create_table "players", force: :cascade do |t|
    t.string "name"
    t.bigint "game_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "ordering"
    t.integer "score", default: 0, null: false
    t.index ["game_id", "ordering"], name: "index_players_on_game_id_and_ordering", unique: true
    t.index ["game_id"], name: "index_players_on_game_id"
    t.index ["user_id"], name: "index_players_on_user_id"
  end

  create_table "road_segments", force: :cascade do |t|
    t.bigint "road_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["road_id"], name: "index_road_segments_on_road_id"
  end

  create_table "roads", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "tiles", force: :cascade do |t|
    t.string "orientation_id", default: "north", null: false
    t.string "tile_variant_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "game_id", null: false
    t.integer "ordering", null: false
    t.integer "x"
    t.integer "y"
    t.index ["game_id"], name: "index_tiles_on_game_id"
    t.index ["orientation_id"], name: "index_tiles_on_orientation_id"
    t.index ["tile_variant_id"], name: "index_tiles_on_tile_variant_id"
    t.index ["x", "y", "game_id"], name: "index_tiles_on_x_and_y_and_game_id", unique: true
  end

  create_table "turns", force: :cascade do |t|
    t.bigint "player_id", null: false
    t.bigint "tile_id", null: false
    t.datetime "tile_played_at"
    t.datetime "meeple_played_at"
    t.datetime "ended_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["player_id"], name: "index_turns_on_player_id"
    t.index ["tile_id"], name: "index_turns_on_tile_id", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.integer "failed_attempts", default: 0, null: false
    t.string "unlock_token"
    t.datetime "locked_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "guest", default: false
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["unlock_token"], name: "index_users_on_unlock_token", unique: true
  end

  add_foreign_key "city_region_borders", "city_regions"
  add_foreign_key "city_region_borders", "field_regions"
  add_foreign_key "city_regions", "cities"
  add_foreign_key "edge_field_regions", "edges"
  add_foreign_key "edge_field_regions", "field_regions"
  add_foreign_key "edge_pair_members", "edge_pairs"
  add_foreign_key "edge_pair_members", "edges"
  add_foreign_key "edges", "city_regions"
  add_foreign_key "edges", "road_segments"
  add_foreign_key "edges", "tiles"
  add_foreign_key "field_regions", "fields"
  add_foreign_key "games", "turns"
  add_foreign_key "meeple_plays", "players"
  add_foreign_key "players", "games"
  add_foreign_key "players", "users"
  add_foreign_key "road_segments", "roads"
  add_foreign_key "tiles", "games"
  add_foreign_key "turns", "players"
  add_foreign_key "turns", "tiles"
end

export enum ServerPacketType {
    Pong,
    SessionId,
    LoginToken,
    CharacterList,
    FullCharacter,
    EnterToWorld,
    CreateEntity,
    UpdateEntity,
    RemoveEntity,
    CreateCharacter,
    SyncEvent,
    PlayMontage,
    Action,
    SelectTarget,
    CancelTarget,
    TakeDamage,
    TakeMiss,
    TakeDodge,
    SystemMessage,
    Heal,
    ActionArea,
    PlayerStats,
    AutoAttack,
    Equip,
    Desequip,
    UpdateStats,
    UpdateSkillExperience,
    Die,
    AddItemContainer,
    RemoveItemContainer,
    ChangeAmountItemContainer,
    MoveTo,
    OpenContainer,
    CloseContainer,
    StartSkinning,
    Dissolve,
    CancelInteract,
    OpenWindow,
    CloseWindow,
    PlayerStatics,
    Tooltip,
    UpdateTick,
    FinishCollect,
    CraftingList,
    VendorWindow,
    Unstuck,
    RequestParty,
    PartyData,
    ChatMessage,
    LoadLevel,
    RequestTrade,
    CancelTrade,
    OpenTradeWindow,
    ChangeStatusTrade,
    SpecialMessage,
    CraftLog,
    UpdateSkillInfo,
    Queue,
    PlayerActions,
    GoTo,
    Say,
    JoinGuild,
    GuildsList,
    GuildData,
    HighlightUI,
    SteamArchivement,
    GetServerList,
    LoadMapData,
    ValidateSteamLoken,
    CreateCharacterError,
    CreateCharacterFinish
}

export enum ClientPacketType {
    Ping,
    Login,
    CharacterList,
    FullCharacter,
    EnterToWorld,
    UpdateEntity,
    GetEntityInfo,
    SyncEvent,
    PlayMontage,
    Action,
    SetAction,
    SelectTarget,
    CancelTarget,
    CheckHit,
    ActionSuccess,
    ActionAreaSuccess,
    ActionArea,
    AutoAttack,
    Equip,
    Desequip,
    Command,
    ChatMessage,
    CheckHitAutoAttack,
    CheckAttackRange,
    Interact,
    DestroyItem,
    MoveItem,
    ChangeContainer,
    RequestContainerList,
    Skinning,
    Consume,
    ClearAction,
    Collect,
    PlayerStatics,
    AddStat,
    CraftItem,
    BuyItem,
    RequestParty,
    ConfirmParty,
    FinishQuest,
    QuestFav,
    SellItem,
    RequestTrade,
    AcceptTrade,
    NotAcceptTrade,
    CancelTrade,
    ChangeStatusTrade,
    PlayerActions,
    Waipoint,
    AppendCard,
    Queue,
    Precast,
    CreateGuild,
    GuildsList,
    CreateEventInstance,
    LoginSteam,
    GetGuildData,
    RequestGuildJoin,
    AcceptGuildRequest,
    DenyGuildRequest,
    RemoveGuildMember,
    LeaveGuild,
    CreateCharacter
}